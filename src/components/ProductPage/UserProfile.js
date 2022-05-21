import styles from './UserProfile.module.css';
import { Link } from 'react-router-dom';
export default function UserProfile({art}) {
    const loaded = () => {
        return (
            <Link to={`/user/${art.user._id}`}>
                <div className={styles.UserProfile}>
                <div className={styles.CircleImg} style={{backgroundImage: `url(${art.user.avatar})`}}></div>
            
            <div className={styles.UserNameText}>
                <h1>{art.nameOfArt}</h1>
                <div className={styles.UserFollowDiv}>
                    <h2>{art.user.username}</h2>
                </div>
            </div>
            </div>
            </Link>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     art && art.user ? loaded() : loading()
    )
}