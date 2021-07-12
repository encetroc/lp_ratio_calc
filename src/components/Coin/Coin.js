import { useCoinData } from '../../CoinDataProvider'

export default function Coin({ coinId }) {
    const { useCoinWithRichData } = useCoinData()
    const { data, isLoading } = useCoinWithRichData(coinId)

    const formatPrice = (price) => {
        if (price) {
            return `$${price}`
        }
        return 0
    }

    if (isLoading) return 'Loading...'

    return (
        <div>
            {`${data.name} | ${formatPrice(data.market_data.current_price.usd)}`}
        </div>
    )
}
