import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: .8rem;
    font-weight: 700;
    text-align:center;
    color: ${props => {
        if (props.value >= 0) {
            return 'green'
        } else {
            return 'red'
        }
    }};
    border: ${props => {
        if (props.value >= 0) {
            return '2px solid green'
        } else {
            return '2px solid red'
        }
    }};
`