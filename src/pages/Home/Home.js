import { AddCoin, CoinSearch, CoinCalculate, CopyNotification } from '../../components'
import { Loading } from '../../elements'
import { useStore } from '../../Store'
import Styles from './Home.module.css'

export default function Home() {
    const { state } = useStore()

    return (
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
    )
}
