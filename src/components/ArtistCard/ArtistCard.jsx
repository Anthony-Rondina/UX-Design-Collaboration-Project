import styles from "./ArtistCard.module.css";
import SaveBtn from "../SaveBtn/SaveBtn";

export default function ArtistCard({ artData }) {
    return (
        <div className={styles.artCard}>
            <img className={styles.artImage} src={artData.image} />
            <div className={styles.btTextBox}>
                {/*justify content spaace between */}
                <div className={styles.artText}>
                    Name of Art
                    {/* <p stye={{ fontWeight: 'bold' }}>{artData.user.firstName} {artData.user.lastName}</p> */}
                    {/* ternary if name length <0 then blah */}
                    <p className={styles.artTitle}> {artData.title} Artist Name</p>
                </div>
                <div className={styles.views}>
                    <p>
                        {artData.views} Views
                    </p>
                </div>
                <img src={SaveBtn} />
            </div>
        </div>
    );
}

