import React, { useContext } from 'react'
import { useQuery, useQueries } from 'react-query'
import { Loading, FullScreen } from './elements'

const CoinDataContext = React.createContext()

const useCoinData = () => {
    return useContext(CoinDataContext)
}

function CoinDataProvider({ children }) {
    const { isLoading: isCoinsLoading, error: coinsError, data: coins } = useQuery('getCoins', () =>
        fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`, { mode: 'cors' }).then(res =>
            res.json()
        )
    )

    const getCoinRichData = (coinId) => {
        return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
            .then(res => res.json())
    }

    const useCoinWithRichData = (coinId) => {
        return useQuery(['post', coinId], () => getCoinRichData(coinId))
    }

    const value = {
        isCoinsLoading,
        coins,
        useCoinWithRichData
    }

    if (isCoinsLoading) {
        return (
            <FullScreen>
                <Loading big />
            </FullScreen>
        )
    }

    return (
        <CoinDataContext.Provider value={value}>
            {children}
        </CoinDataContext.Provider>
    )
}

export { CoinDataProvider, useCoinData }
