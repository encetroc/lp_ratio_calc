import { useEffect } from 'react'

import { useStore } from '../Store'
import { Notification, CBox, Close } from '../elements'
import { DeleteIcon } from '../icons'

export default function CopyNotification() {
    const { state, dispatch } = useStore()

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'COPY_TO_CLIPBOARD_END'
            })
        }, 1500)
    })

    const closeNotification = () => {
        dispatch({
            type: 'COPY_TO_CLIPBOARD_END'
        })
    }

    return (
        <Notification>
            <Close onClick={closeNotification}>
                <DeleteIcon />
            </Close>
            <CBox alignItems={'center'} gap='1rem'>
                <span>Copied</span>
                {state.copied}
            </CBox>
        </Notification>
    )
}
