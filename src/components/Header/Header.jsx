import styles from "./Header.module.css"


export default function Header(){
    return(
        <header className={styles.header}>
            <img src="./images/globe.png" alt="globe"/>
            <p>my travel journal</p>
        </header>
    )
}