import Styles from './Home.module.css'
import { NextIcon } from '../../icons'
import { Footer } from '..'
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>LP ratio Calculator</h1>
            <div className={Styles.description}>
                This simple app allows you to calculate how much you should have of each
                token to provide a perfect match for the liquidity pool of your choice,
                depending on the ratio of each coin.
            </div>
            <button className={Styles.action} onClick={() => history.push("/app")}>
                <span>Go to App</span>
                <NextIcon />
            </button>
            <Footer />
        </div>
    )
}
