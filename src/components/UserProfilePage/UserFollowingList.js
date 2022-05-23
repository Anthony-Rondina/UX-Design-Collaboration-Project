import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserFollowingList({user}) {
    return (
        <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    <h1>Users I'm Following</h1>
                    {user.following.map((followedUser) => {
                        return(
                        <Link to={`/user/${user._id}`}><div>
                        <img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} />
                        <p>{}</p>
                    </div></Link>
                        )
                    })}  
                </div>
        </div>
    )
}