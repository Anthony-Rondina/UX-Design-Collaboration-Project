import { Link } from "react-router-dom"
import styles from './UserProfile.module.css';


export default function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} />
        </div>
    )
}