import { useStore } from '../../Store'
import Styles from './CoinCalculate.module.css'

export default function CoinCalculate({ coinKey }) {
    const { state, dispatch } = useStore()

    const handleCoinAmountChange = (event) => {
        dispatch({
            type: 'CHANGE_AMOUNT',
            payload: {
                coinKey: coinKey,
                amount: event.target.value
            }
        })
        dispatch({
            type: 'UPDATE_TOTAL_VALUE'
        })
        dispatch({
            type: 'UPDATE_NEW_AMOUNT'
        })
    }

    const handleCoinRatioChange = (event) => {
        dispatch({
            type: 'CHANGE_RATIO',
            payload: {
                coinKey: coinKey,
                ratio: event.target.value
            }
        })
        dispatch({
            type: 'UPDATE_NEW_AMOUNT'
        })
    }

    return (
        <div className={Styles.container}>
            {state.currentCoins[coinKey].coin.name}
            <input type='number' value={state.currentCoins[coinKey].amount} onChange={(event) => handleCoinAmountChange(event)} />
            <input type='number' value={state.currentCoins[coinKey].ratio} onChange={(event) => handleCoinRatioChange(event)} />
            {`new amount: ${state.currentCoins[coinKey].newAmount}`}
        </div>
    )
}
