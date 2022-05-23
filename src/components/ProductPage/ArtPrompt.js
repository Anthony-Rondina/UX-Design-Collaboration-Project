import styles from './UserProfile.module.css';

export default function ArtPrompt({art}) {
    return (
        <div className={styles.ArtPrompt}>
            <p>{art.artPrompt}</p>
        </div>
    )
}
