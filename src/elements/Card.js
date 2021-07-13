import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 18rem;
    min-height: 27.07rem;
    padding: 2rem;
    align-items: ${props => props.alignItems || 'unset'};
    justify-content: ${props => props.justifyContent || 'unset'};
    border: ${props => props.dashed ? '2px dashed gray' : '2px solid gray'};
`