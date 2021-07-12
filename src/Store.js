import React, { useContext, useReducer } from 'react'

const StoreContext = React.createContext()

const initialState = {
    currentCoins: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COIN':
            return { ...state }
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
