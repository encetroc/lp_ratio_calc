import { useStore } from "../Store"
import { CBox, Card, Hover } from '../elements'

export default function AddCoin() {
    const { dispatch } = useStore()

    const handleAddCoin = () => {
        dispatch({
            type: 'ADD_COIN'
        })
    }

    return (
        <Hover>
            <Card justifyContent={'center'} dashed onClick={handleAddCoin}>
                <CBox alignItems={'center'} justifyContent={'center'}>
                    <span>
                        <strong style={{ fontSize: '1.5rem' }}>Add coin</strong>
                    </span>
                </CBox>
            </Card >
        </Hover>
    )
}
