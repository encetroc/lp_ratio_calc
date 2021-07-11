import Styles from './CoinData.module.css'

export default function CoinData() {
    return (
        <div>
            coin data
            <input type='number' placeholder='current amount' />
            <input type='number' placeholder='pool ratio' />
            <input type='number' placeholder='coin price' />
        </div>
    )
}
