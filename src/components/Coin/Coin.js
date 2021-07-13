import { useCoinData } from '../../CoinDataProvider'
import { RBox, Avatar, Hover } from '../../elements'

export default function Coin({ handleChooseCoin, coinId }) {
    const { useCoinWithRichData } = useCoinData()
    const { data: coin, isLoading: isCoinLoading } = useCoinWithRichData(coinId)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    if (isCoinLoading) return 'Loading...'

    return (
        <Hover>
            <RBox justifyContent={'space-between'} alignItems={'center'} gap={'1rem'} onClick={() => handleChooseCoin(coin)}>
                <RBox alignItems={'center'} gap={'0.5rem'}>
                    <Avatar src={coin.image.thumb} />
                    <span>
                        <strong>{coin.symbol.toUpperCase()}</strong>
                    </span>
                </RBox>
                <span>{formatter.format(coin.market_data.current_price.usd)}</span>
            </RBox>
        </Hover>
    )
}
