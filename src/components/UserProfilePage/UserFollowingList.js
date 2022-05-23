import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserFollowingList({loggedInUser,followUser, unfollowUser, updatedUser,user, id}) {
    
    const loaded = () => {
        return (
            <div className={styles.filterResults}>
                    <div className={styles.contentBox}>
                        <h1>Users I'm Following</h1>
                        <div className={styles.followBox}>
                        {loggedInUser.following.map((followedUser) => {
                            return(
                                
                            <Link to={`/user/${followedUser._id}`}><div>
                                {console.log(loggedInUser)}
                            <img src={followedUser.avatar} alt="" style={{ width: 170, height: 170, borderRadius: 90,margin: "5px 20px 3px 20px"}} />
                            <p>{followedUser.username}</p>
                        </div></Link>
                            )
                        })}  
                        </div>
                    </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     updatedUser && loggedInUser.following ? loaded() : loading()
    )
}