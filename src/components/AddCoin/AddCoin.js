import { useStore } from "../../Store"

export default function AddCoin() {
    const { dispatch } = useStore()

    const handleAddCoin = () => {
        dispatch({
            type: 'ADD_COIN'
        })
    }

    return (
        <button onClick={handleAddCoin}>add coin</button>
    )
}
