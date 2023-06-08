import styles from './Header.module.css';
import logotipo from '../img/logo-wf.png'


export function Header(){
    return(

        <header className={styles.header}>
            <img src={logotipo} alt='Logotipo do projeto'/> 
        </header> 
    );
}