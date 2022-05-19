import styles from './UserProfile.module.css';

export default function UserProfile({art}) {
    const loaded = () => {
        return (
            <div className={styles.UserProfile}>
            <div>
                <img className={styles.CircleImg} src={art.user.avatar}/>
            </div>
            <div className='UserNameText'>
                <h1>{art.nameOfArt}</h1>
                <h2>{art.user.username}</h2>
            </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     art && art.user ? loaded() : loading()
    )
}