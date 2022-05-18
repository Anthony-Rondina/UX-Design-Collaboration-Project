
import { Link } from "react-router-dom"
import { useState, useEffect, usepar } from "react"
import UserArtwork from "../../components/UserProfilePage/UserArtwork"
import ListBar from "../../components/UserProfilePage/ListBar"
import UserBioBar from "../../components/UserProfilePage/UserBioBar"
import styles from "../../components/UserProfilePage/UPPC.module.css"
import Navbar from "../../components/NavHeader/NavHeader"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function UserProfilePage({chosenUser, user}) {
const [refresh, setRefresh] = useState(false)
const [artwork, setArtWork] = useState(true)
const [WIP, setWIP] = useState(false)
const [following, setFollowing] = useState(false)
const [about, setAbout]=useState(false)
const [displayContent, setDisplayContent]=useState([])
const [updatedUser, setUpdatedUser]=useState({})
const { id } = useParams()
    const getData = (input) => {
        (async () => {
            try {
                const response = await axios.get(`/api/users/${input}`)
                // console.log("response is",response)
                setUpdatedUser(response.data)
                // console.log("updated user is",response.data)
                if (response.status === 200) {
                    setRefresh(!refresh)
                } else {
                    console.log('Something went wrong')
                }

            } catch (err) {
                console.log(err)
                // console.log(`cards is ${cards}`)
            }
        })()
    }

    useEffect(() => {
        getData(id)
    },[])

    const loaded = () => {
        return (
            <div className={styles.mainProfileWrapper}>
            
            <div className={styles.innerProfileWrapper}>
                {/* {console.log("PP updated user is", updatedUser.artCollection)} */}
                <Navbar/>
                <UserBioBar user={user}/>
                <ListBar setRefresh={setRefresh} setArtWork={setArtWork} setWIP={setWIP} setFollowing={setFollowing} setAbout={setAbout} setDisplayContent={setDisplayContent} displayContent={displayContent} about={about} WIP={WIP} artwork={artwork} following={following} />
                <UserArtwork updatedUser={updatedUser} user={user}about={about} WIP={WIP} artwork={artwork} following={following} />
            </div>
        </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     user && user.artCollection ? loaded() : loading()
    )
}