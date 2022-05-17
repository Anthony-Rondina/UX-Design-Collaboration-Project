import styles from "./UPPC.module.css"

export default function ListBar({setArtWork, setWIP, setAbout, setDisplayContent, displayContent, setFollowing, setRefresh, refresh, artwork, WIP, about,following }) {
//This function will help change the background color of the selected li

//make data a usestate

const choice =  (input) => {
    const data = ''
    switch (input) {
        case "art" :
            setArtWork(true)
            setWIP(false)
            setFollowing(false)
            setAbout(false)
            // data = "await axios.get(`/api/cards/`)"
            setDisplayContent(data)
            setRefresh(!refresh)
            break;
        case "inProgress": 
            setWIP(true)
            setArtWork(false)
            setFollowing(false)
            setAbout(false)
            // data = "await axios.get(`/api/cards/`)"
            setDisplayContent(data)
            setRefresh(!refresh)
            break;
        case "follow": 
            setFollowing(true)
            setArtWork(false)
            setWIP(false)
            setAbout(false)
            // data = "await axios.get(`/api/cards/`)"
            setDisplayContent(data)
            setRefresh(!refresh)
            break;
        case "aboutMe": 
            setAbout(true)
            setArtWork(false)
            setFollowing(false)
            setWIP(false)
            // data = "await axios.get(`/api/cards/`)"
            setDisplayContent(data)
            setRefresh(!refresh)
            break;
    }
}
    return (
        <div className={styles.userSortOptions}>
        {/* position userSortOptions to the left */}
            <ul className={styles.listBarItems}>
                <li onClick={() => {{choice("art")}}} className={styles.sortOption} style={artwork ? {background: "white"} : {background: "#F7F7F7"}}>Artwork</li>
                <li onClick={() => {{choice("inProgress")}}} className="sortOption" style={WIP ? {background: "white"} : {background: "#F7F7F7"}}>WIP</li>
                <li onClick={() => {{choice("follow")}}} className="sortOption" style={following ? {background: "white"} : {background: "#F7F7F7"}}>Following</li>
                <li onClick={() => {{choice("aboutMe")}}} className={styles.sortOption2} style={about ? {background: "white"} : {background: "#F7F7F7"}}>About</li>
            </ul>
        </div>
    )
}