import copy from 'copy-to-clipboard';

import { useRef, useEffect } from 'react'
import { useStore } from '../Store'
import { CBox, Diff, Card, Input, Label, Close } from '../elements'
import { CopyIcon, DeleteIcon } from '../icons'
import { Coin } from '.'

export default function CoinCalculate({ coinKey }) {
    const { state, dispatch } = useStore()
    const amountInputRef = useRef()

    useEffect(() => {
        amountInputRef.current.focus()
    }, [])

    const handleCoinAmountChange = (event) => {
        dispatch({
            type: 'CHANGE_AMOUNT',
            payload: {
                coinKey: coinKey,
                amount: event.target.value
            }
        })
        dispatch({
            type: 'UPDATE_TOTAL_VALUE'
        })
        dispatch({
            type: 'UPDATE_NEW_AMOUNT'
        })
    }

    const handleCoinRatioChange = (event) => {
        dispatch({
            type: 'CHANGE_RATIO',
            payload: {
                coinKey: coinKey,
                ratio: event.target.value
            }
        })
        dispatch({
            type: 'UPDATE_NEW_AMOUNT'
        })
    }

    const unselectCoin = (coin) => {
        dispatch({
            type: 'UNSELECT_COIN',
            payload: {
                coinKey: coinKey
            }
        })
    }

    const deleteCoin = () => {
        dispatch({
            type: 'DELETE_COIN',
            payload: coinKey
        })
    }

    const formatter = new Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 6,
    })

    const calculateDiff = () => {
        const diff = state.currentCoins[coinKey].newAmount - state.currentCoins[coinKey].amount
        let diffFormatted = diff >= 0
            ? `+${formatter.format(diff)} ${state.currentCoins[coinKey].coin.symbol.toUpperCase()}`
            : `${formatter.format(diff)} ${state.currentCoins[coinKey].coin.symbol.toUpperCase()}`
        return {
            raw: diff,
            formatted: diffFormatted
        }
    }

    const formatNewAmount = () => {
        return {
            raw: state.currentCoins[coinKey].newAmount,
            formatted: `${formatter.format(state.currentCoins[coinKey].newAmount)} ${state.currentCoins[coinKey].coin.symbol.toUpperCase()}`
        }
    }

    const copyValue = (value) => {
        return copy(value, {
            format: 'text/plain',
            onCopy: () => {
                dispatch({
                    type: 'COPY_TO_CLIPBOARD',
                    payload: value
                })
            }
        });
    }

    return (
        <Card>
            <Close onClick={deleteCoin}>
                <DeleteIcon />
            </Close>
            <CBox gap={'1rem'}>
                <Coin coinId={state.currentCoins[coinKey].coin.id} handleCoinClick={unselectCoin} isDeletable={true} />
                <CBox>
                    <Label htmlFor='amount'>{`Amount of ${state.currentCoins[coinKey].coin.symbol.toUpperCase()}`}</Label>
                    <Input id='amount' ref={amountInputRef} type='number' value={state.currentCoins[coinKey].amount} onChange={(event) => handleCoinAmountChange(event)} />
                </CBox>
                <CBox>
                    <Label htmlFor='ratio'>Pool ratio in %</Label>
                    <Input id='ratio' type='number' value={state.currentCoins[coinKey].ratio} onChange={(event) => handleCoinRatioChange(event)} />
                </CBox>
                <CBox>
                    <Label htmlFor='new'>New amount</Label>
                    <Diff id='new' value={formatNewAmount().raw} onClick={() => copyValue(formatNewAmount().raw)}>
                        {formatNewAmount().formatted}
                        <CopyIcon />
                    </Diff>
                </CBox>
                <CBox>
                    <Label htmlFor='diff'>Amount to add or subtract</Label>
                    <Diff id='diff' value={calculateDiff().raw} onClick={() => copyValue(Math.abs(calculateDiff().raw))}>
                        {calculateDiff().formatted}
                        <CopyIcon />
                    </Diff>
                </CBox>
            </CBox>
        </Card>
    )
}
