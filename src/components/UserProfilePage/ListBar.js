import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function ListBar({updatedUser, user, setArtWork, setWIP, setAbout, setDisplayContent, displayContent, setFollowing, setRefresh, refresh, artwork, WIP, about,following }) {
const loaded = () => {
    return (
        <div className={styles.userSortOptions}>
            {/* {console.log("updateduser is",updatedUser)} */}
            <ul className={styles.listBarItems}>
                <Link to={`/user/${updatedUser._id}`}><li className={styles.sortOption} style={artwork ? {background: "white"} : {background: "#F7F7F7"}}>Artwork</li></Link>
                <Link to={`/user/wip/${updatedUser._id}`}><li  className="sortOption" style={WIP ? {background: "white"} : {background: "#F7F7F7"}}>WIP</li></Link>
                <Link to={`/user/${updatedUser._id}/following`}><li className="sortOption" style={following ? {background: "white"} : {background: "#F7F7F7"}}>Following</li></Link>
                <Link to={`/user/${updatedUser._id}/about`}><li className={styles.sortOption2} style={about ? {background: "white"} : {background: "#F7F7F7"}}>About</li></Link>
            </ul>
        </div>
    )
}

const loading = () => {
    return <h1>Loading</h1>
}
return (
 updatedUser && updatedUser._id ? loaded() : loading()
)
    
}