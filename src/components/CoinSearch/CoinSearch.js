import { useState } from 'react'
import Styles from './CoinSearch.module.css'
import { useCoinData } from '../../CoinDataProvider'
import { Coin } from '../'
import { useStore } from '../../Store'

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

    const handleChooseCoin = (coin) => {
        dispatch({
            type: 'CHOOSE_COIN',
            payload: {
                coinKey: coinKey,
                coin: coin
            }
        })
    }

    return (
        <div>
            {`key: ${coinKey}`}
            <br />
            <input type='text' placeholder='Search' value={searchInput} onChange={(event) => handleSearchInputChange(event)} />
            <div className={Styles.scroll}>
                <ul>
                    {searchResult.map(coin => <Coin key={coin.id} handleChooseCoin={handleChooseCoin} coinId={coin.id} />)}
                </ul>
            </div>
        </div>
    )
}
