import { useCoinData } from '../CoinDataProvider'
import { RBox, Avatar, Hover, CoinWrapper, Loading } from '../elements'
import { DeleteIcon } from '../icons'

export default function Coin({ handleCoinClick, coinId, isDeletable }) {
    const { useCoinWithRichData } = useCoinData()
    const { data: coin, isLoading: isCoinLoading } = useCoinWithRichData(coinId)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    if (isCoinLoading) return <Loading />

    return (
        <Hover onClick={() => handleCoinClick(coin)}>
            <CoinWrapper>
                <RBox justifyContent={'space-between'} alignItems={'center'} gap={'1rem'}>
                    <RBox alignItems={'center'} gap={'0.5rem'}>
                        <Avatar src={coin.image.thumb} />
                        <span>
                            <strong>{coin.symbol.toUpperCase()}</strong>
                        </span>
                    </RBox>
                    <span>{formatter.format(coin.market_data.current_price.usd)}</span>
                    {isDeletable && <DeleteIcon />}
                </RBox>
            </CoinWrapper>
        </Hover>
    )
}
