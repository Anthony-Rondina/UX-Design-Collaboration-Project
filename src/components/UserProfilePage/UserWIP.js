import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserWIP({}) {
    return (
        <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    <h1>My Works In Progress</h1>
                    <div>
                        <Link to="/user/DYNAMICID/upload"><img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} /></Link>
                        <img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} />
                        <img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} />
                    </div>
                </div>
        </div>
    )
}