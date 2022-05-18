
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import UserWIP from "../../components/UserProfilePage/UserWIP"
import ListBar from "../../components/UserProfilePage/ListBar"
import UserBioBar from "../../components/UserProfilePage/UserBioBar"
import styles from "../../components/UserProfilePage/UPPC.module.css"
import Navbar from "../../components/NavHeader/NavHeader"

export default function UserWIPPage({user}) {
const [refresh, setRefresh] = useState(false)
const [artwork, setArtWork] = useState(true)
const [WIP, setWIP] = useState(false)
const [following, setFollowing] = useState(false)
const [about, setAbout] = useState(false)
const [displayContent, setDisplayContent] = useState([])

useEffect(() => {
// make a backend call to get a filtered search result based on the option picked from 
}, [refresh])

    return (
        <div className={styles.mainProfileWrapper}>
            <div className={styles.innerProfileWrapper}>
                <Navbar/>
                <UserBioBar user={user}/>
                <ListBar setRefresh={setRefresh} setArtWork={setArtWork} setWIP={setWIP} setFollowing={setFollowing} setAbout={setAbout} setDisplayContent={setDisplayContent} displayContent={displayContent} about={about} WIP={WIP} artwork={artwork} following={following} />
                <UserWIP about={about} WIP={WIP} artwork={artwork} following={following} />
            </div>
        </div>
    )
}