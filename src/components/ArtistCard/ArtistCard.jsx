import styles from "./ArtistCard.module.css";
import SaveBtn from "./Save Button.png";
import { Link } from "react-router-dom";

export default function ArtistCard({ artData, user }) {
    return (
        <div className={styles.artCard}>
            <img className={user ? styles.saveBtn : styles.saveBtnHidden} src={SaveBtn} />

            <Link to={`/art/${artData._id}`}>
                <div className={styles.artImage} style={{ backgroundImage: `url(${artData.image})` }} ></div>
            </Link>

            <div className={styles.btTextBox}>
                <div className={styles.artName}>
                    <Link to={`/art/${artData._id}`}>  {artData.nameOfArt} </Link>

                    <p className={styles.artistName}>
                        {artData.user.username}</p>
                </div>

                <div className={styles.views}>
                    <p>
                        {artData.views} Views
                    </p>
                </div>
            </div>
        </div >
    );
}

