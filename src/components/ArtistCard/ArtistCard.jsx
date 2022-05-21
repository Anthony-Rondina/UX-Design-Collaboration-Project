import styles from "./ArtistCard.module.css";
import SaveBtn from "./Save Button.png";
import { Link } from "react-router-dom";

export default function ArtistCard({ artData, user }) {
    return (
        <div className={styles.artCard}>
            <img className={user ? styles.saveBtn : styles.saveBtnHidden} src={SaveBtn} />
            <Link to={`/art/${artData._id}`}> <img className={styles.artImage} src={artData.image} /> </Link>
            <div className={styles.btTextBox}>
                {/*justify content spaace between */}
                <div className={styles.artName}>
                    Name of Art
                    {/* <p stye={{ fontWeight: 'bold' }}>{artData.user.firstName} {artData.user.lastName}</p> */}
                    {/* ternary if name length <0 then blah */}
                    <p className={styles.artistName}> {artData.title} Artist Name</p>
                </div>
                <div className={styles.views}>
                    <p>
                        {artData.views} Views
                    </p>
                </div>
            </div>
        </div>
    );
}

