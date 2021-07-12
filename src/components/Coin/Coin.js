import { useCoinData } from '../../CoinDataProvider'

export default function Coin({ handleChooseCoin, coinId }) {
    const { useCoinWithRichData } = useCoinData()
    const { data: coin, isLoading: isCoinLoading } = useCoinWithRichData(coinId)

    const formatPrice = (price) => {
        if (price) {
            return `$${price}`
        }
        return 0
    }

    if (isCoinLoading) return 'Loading...'

    return (
        <div onClick={() => handleChooseCoin(coin)}>
            {`${coin.name} | ${formatPrice(coin.market_data.current_price.usd)}`}
        </div>
    )
}
