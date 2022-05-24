import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserAboutMe({updatedUser}) {
    
    const loaded = () => {
        return (
            <div className={styles.aboutResults}>
                    <div className={styles.aboutBox}>
                        <hr className={styles.line1} />
                        <p>{updatedUser.bio}</p>
                        <hr className={styles.line2} />
                    </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }


    return updatedUser && updatedUser.artCollection ? loaded() : loading()
}