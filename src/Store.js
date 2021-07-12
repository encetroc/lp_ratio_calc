import React, { useContext, useReducer } from 'react'
import { v4 } from 'uuid';

const StoreContext = React.createContext()

const initialState = {
    currentCoins: {},
    totalValue: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COIN':
            const coinKey = v4();
            return {
                ...state,
                currentCoins: {
                    ...state.currentCoins,
                    [coinKey]: {
                        state: 'search',
                        coin: {},
                        amount: 0,
                        ratio: 0,
                        newAmount: 0
                    }
                }
            }
        case 'CHOOSE_COIN':
            return {
                ...state,
                currentCoins: {
                    ...state.currentCoins,
                    [action.payload.coinKey]: {
                        ...state.currentCoins[action.payload.coinKey],
                        state: 'calculate',
                        coin: action.payload.coin,
                    }
                }
            }
        case 'CHANGE_AMOUNT':
            return {
                ...state,
                currentCoins: {
                    ...state.currentCoins,
                    [action.payload.coinKey]: {
                        ...state.currentCoins[action.payload.coinKey],
                        amount: action.payload.amount
                    }
                }
            }
        case 'CHANGE_RATIO':
            return {
                ...state,
                currentCoins: {
                    ...state.currentCoins,
                    [action.payload.coinKey]: {
                        ...state.currentCoins[action.payload.coinKey],
                        ratio: action.payload.ratio
                    }
                }
            }
        case 'UPDATE_TOTAL_VALUE':
            return {
                ...state,
                totalValue: Object.keys(state.currentCoins).reduce((accumulator, coinKey) => {
                    const currentCoin = state.currentCoins[coinKey]
                    const currentCoinValue = currentCoin.coin.market_data.current_price.usd * currentCoin.amount
                    return accumulator + currentCoinValue
                }, 0)
            }
        case 'UPDATE_NEW_AMOUNT':
            return {
                ...state,
                currentCoins: Object.keys(state.currentCoins).map(coinKey => {
                    const currentCoin = state.currentCoins[coinKey]
                    return {
                        ...currentCoin,
                        newAmount: currentCoin.ratio * state.totalValue / currentCoin.coin.market_data.current_price.usd / 100
                    }
                })
            }
        default:
            return state
    }
}

const useStore = () => {
    return useContext(StoreContext)
}

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider, useStore }
