import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserAboutMe({updatedUser}) {
    
    const loaded = () => {
        return (
            <div className={styles.filterResults}>
                    <div className={styles.contentBox}>
                        <p>{updatedUser.bio}</p>
                    </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }


    return updatedUser && updatedUser.artCollection ? loaded() : loading()
}