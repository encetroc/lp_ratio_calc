import { AddCoin, CoinSearch, CoinCalculate } from '../../components'
import { useStore } from '../../Store'
import Styles from './Home.module.css'

export default function Home() {
    const { state } = useStore()

    return (
        <div className={Styles.container}>
            <AddCoin />
            {
                Object.keys(state.currentCoins).map(key => {
                    if (state.currentCoins[key].state === 'search') {
                        return <CoinSearch key={key} coinKey={key} />
                    } else {
                        return <CoinCalculate key={key} coinKey={key} />
                    }
                })
            }
            {`total value: ${state.totalValue}`}
        </div>
    )
}
