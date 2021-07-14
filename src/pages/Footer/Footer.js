import Styles from './Footer.module.css'
import { RBox } from '../../elements'

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <RBox gap={'0.5rem'}>
                <span> created by </span>
                <a href="https://www.linkedin.com/in/el-mehdi-rhindi-b8a45371/" target="_blank" rel='noreferrer'>el mehdi rhindi</a>
                -
                <a href="https://github.com/encetroc" target="_blank" rel='noreferrer'>Github</a>
                -
                <a href="https://twitter.com/g6handi" target="_blank" rel='noreferrer'>twitter</a>
            </RBox>
        </footer>
    )
}
