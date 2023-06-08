import styles from './Header.module.css';
import logotipo from '../assets/Logo.png'

export function Header(){

    return(
        <header className={styles.header}>
            <img src={logotipo} alt="logo do projeto"/>
        </header>
    )
}