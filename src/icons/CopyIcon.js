import Svg from './Svg'

export default function CopyIcon(props) {
    return (
        <Svg {...props}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path fill={props.fill || 'currentColor'} d="M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z" />
        </Svg>
    )
}