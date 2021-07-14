import styled from 'styled-components'

export default styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 18rem;
    min-height: 29.1rem;
    padding: 2rem;
    align-items: ${props => props.alignItems || 'unset'};
    justify-content: ${props => props.justifyContent || 'unset'};
    border: ${props => props.dashed ? '2px dashed gray' : '2px solid gray'};
`