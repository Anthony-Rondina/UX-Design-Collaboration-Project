import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserArtwork({user}) {
    return (
        <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    <h1>MY ARTWORK</h1>
                    <div>
                        <Link to={`/user/${user._id}/upload`}><img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} /></Link>
                        {console.log(user.artCollection)}
                        {/* {user.artCollection.map((art) => {
                            <img src={art.image} alt="user art" />
                        })} */}
                    </div>
                </div>
        </div>
    )
}