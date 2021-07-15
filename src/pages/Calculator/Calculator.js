import { AddCoin, CoinSearch, CoinCalculate, CopyNotification } from '../../components'
import { useStore } from '../../Store'
import { Footer } from '..'
import Styles from './Calculator.module.css'
import { useCoinData } from '../../CoinDataProvider'
import { FullScreen, Loading } from '../../elements'

export default function Calculator() {
    const { state } = useStore()
    const { isCoinsLoading } = useCoinData()

    if (isCoinsLoading) {
        return (
            <FullScreen>
                <Loading big />
            </FullScreen>
        )
    }

    return (
        <div className={Styles.title_container}>
            <h1 className={Styles.title}>LP ratio calculator</h1>
            <div className={Styles.container}>
                {state.copied !== 0 && <CopyNotification />}
                {
                    Object.keys(state.currentCoins).map(key => {
                        if (state.currentCoins[key].state === 'search') {
                            return <CoinSearch key={key} coinKey={key} />
                        } else {
                            return <CoinCalculate key={key} coinKey={key} />
                        }
                    })
                }
                <AddCoin />
            </div>
            <Footer />
        </div>
    )
}
