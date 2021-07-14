import { useState } from 'react'
import { useCoinData } from '../CoinDataProvider'
import { Coin } from '.'
import { Card, CBox, Input, Label, Close } from '../elements'
import { DeleteIcon } from '../icons'
import { useStore } from '../Store'

export default function CoinSearch({ coinKey }) {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const { coins } = useCoinData()
    const { state, dispatch } = useStore()

    const handleSearchInputChange = async (event) => {
        setSearchInput(event.target.value)
        const results = coins.filter(coin => coin.symbol === event.target.value)
        if (results.length) {
            setSearchResult(results)
        } else {
            setSearchResult([])
        }
    }

    const selectCoin = (coin) => {
        dispatch({
            type: 'SELECT_COIN',
            payload: {
                coinKey: coinKey,
                coin: coin
            }
        })
    }

    const deleteCoin = () => {
        dispatch({
            type: 'DELETE_COIN',
            payload: coinKey
        })
    }

    return (
        <Card>
            <Close onClick={deleteCoin}>
                <DeleteIcon />
            </Close>
            <CBox gap={'1rem'}>
                <CBox>
                    <Label for="search">Search coin by symbol</Label>
                    <Input id="search" type='text' placeholder='ETH, BTC ...' value={searchInput} onChange={(event) => handleSearchInputChange(event)} />
                </CBox>
                {searchResult.map(coin => <Coin key={coin.id} handleCoinClick={selectCoin} coinId={coin.id} />)}
            </CBox>
        </Card>
    )
}
