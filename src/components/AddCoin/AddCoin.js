import { useState } from 'react'
import Styles from './AddCoin.module.css'
import { useCoinData } from '../../CoinDataProvider'
import { Coin } from '../'

export default function AddCoin() {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const { coins } = useCoinData()

    const handleSearchInputChange = async (event) => {
        setSearchInput(event.target.value)
        const results = coins.filter(coin => coin.symbol === event.target.value)
        if (results.length) {
            setSearchResult(results)
        } else {
            setSearchResult([])
        }
    }

    return (
        <div>
            <input type='text' placeholder='Search' value={searchInput} onChange={(event) => handleSearchInputChange(event)} />
            <div className={Styles.scroll}>
                <ul>
                    {searchResult.map(coin => <Coin key={coin.id} coinId={coin.id} />)}
                </ul>
            </div>
        </div>
    )
}
