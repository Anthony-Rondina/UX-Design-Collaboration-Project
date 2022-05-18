import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function ListBar({user, setArtWork, setWIP, setAbout, setDisplayContent, displayContent, setFollowing, setRefresh, refresh, artwork, WIP, about,following }) {
//This function will help change the background color of the selected li

//make data a usestate

    return (
        <div className={styles.userSortOptions}>
        {/* position userSortOptions to the left */}
            <ul className={styles.listBarItems}>
                <Link to={`/user/${user._id}`}><li className={styles.sortOption} style={artwork ? {background: "white"} : {background: "#F7F7F7"}}>Artwork</li></Link>
                <Link to={`/user/${user._id}/wip`}><li  className="sortOption" style={WIP ? {background: "white"} : {background: "#F7F7F7"}}>WIP</li></Link>
                <Link to={`/user/${user._id}/following`}><li className="sortOption" style={following ? {background: "white"} : {background: "#F7F7F7"}}>Following</li></Link>
                <Link to={`/user/${user._id}/about`}><li className={styles.sortOption2} style={about ? {background: "white"} : {background: "#F7F7F7"}}>About</li></Link>
            </ul>
        </div>
    )
}