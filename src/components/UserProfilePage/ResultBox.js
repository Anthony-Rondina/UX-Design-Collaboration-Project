import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function ResultBox({artwork, WIP, about, following }) {
    return (
        <div className={styles.filterResults}>
            {artwork ? 
                <div className={styles.contentBox}>
                    <h1>MY ARTWORK!!!</h1>
                    <div>
                        <Link to="/user/DYNAMICID/upload"><img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} /></Link>
                        <img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} />
                        <img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} />
                    </div>
                </div>
                :
                WIP ?
                <div className={styles.contentBox}>
                    <h1>WORKS IN PROGRESS!!!</h1>
                </div>
                :
                about ?
                <div className={styles.contentBox}>
                    <h1>ABOUT ME!!!</h1>
                </div>
                :
                following ?
                <div className={styles.contentBox}>
                    <h1>FOLLOWING!!!</h1>
                </div>
                :
                ""
            } 
        </div>
    )
}