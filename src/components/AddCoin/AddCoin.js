import { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './AddCoin.module.css'

export default function AddCoin() {
    const [searchInput, setSearchInput] = useState('')
    const [coins, setCoins] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
        const result = coins.filter(coin => coin.symbol.includes(event.target.value))
        setSearchResult(result)
        console.log(result)
    }
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`)
            .then(res => {
                setCoins(res.data)
            })
        axios.get(`https://api.coingecko.com/api/v3/coins/0x?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
            .then(res => {
                console.log('my coin', res)
            })
    }, [])
    return (
        <div>
            <input type='text' placeholder='Search' value={searchInput} onChange={(event) => handleSearchInputChange(event)} />
            <div className={Styles.scroll}>
                <ul>
                    {searchResult.map(coin => <li>{coin.name}</li>)}
                </ul>
            </div>
        </div>
    )
}
