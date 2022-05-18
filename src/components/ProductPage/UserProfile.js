import styles from './UserProfile.module.css';

export default function UserProfile() {
    return (
        <div className={styles.UserProfile}>
            <div>
                <img className={styles.CircleImg} src="https://i.imgur.com/CMlEeBC.png"/>
            </div>
            <div className='UserNameText'>
                <h1>Watercolor Flowers</h1>
                <h2>Tanvi</h2>
            </div>
        </div>
    )
}