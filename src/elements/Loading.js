import styled, { keyframes } from "styled-components"

const loading = keyframes`
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
`

export default styled.div`
    display: inline-block;
    position: relative;
    width: 40px;
    width: ${props => props.big ? '80px' : '40px'};
    height: ${props => props.big ? '80px' : '40px'};

    &:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: ${props => props.big ? '32px' : '16px'} solid gray;
        border-color: gray transparent gray transparent;
        animation: ${loading} 2s linear infinite;
    }
`