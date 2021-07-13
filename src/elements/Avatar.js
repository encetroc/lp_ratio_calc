import styled from 'styled-components'
import defaultAvatar from '../assets/avatar.png'

const Avatar = styled.img`
    vertical-align: middle;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%
`

Avatar.defaultProps = {
    src: defaultAvatar,
}

export default Avatar