import styles from './Logo.module.css';
import logo from '../../public/atelier-1.png';

export default function Logo() {
    return (
        <div className={styles.Logo}>
            <img src={logo}/>
        </div>
    )
}