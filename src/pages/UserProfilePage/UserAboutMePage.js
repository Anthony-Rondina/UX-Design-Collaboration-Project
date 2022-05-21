
import { Link } from "react-router-dom"
import { useState, useEffect, usepar } from "react"
import UserArtwork from "../../components/UserProfilePage/UserArtwork"
import ListBar from "../../components/UserProfilePage/ListBar"
import UserBioBar from "../../components/UserProfilePage/UserBioBar"
import styles from "../../components/UserProfilePage/UPPC.module.css"
import Navbar from "../../components/NavHeader/NavHeader"
import axios from "axios"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import UserAboutMe from "../../components/UserProfilePage/UserAboutMe"

export default function UserWIPPage({setChosenWork,chosenUser, user}) {
const [refresh, setRefresh] = useState(false)
const [artwork, setArtWork] = useState(true)
const [WIP, setWIP] = useState(false)
const [following, setFollowing] = useState(false)
const [about, setAbout]=useState(false)
const [displayContent, setDisplayContent]=useState([])
const [updatedUser, setUpdatedUser]=useState({})
const { id } = useParams()
let userId = localStorage.getItem("userID")
const [loggedInUser, setLoggedInUser]=useState({})
const choice =  (input) => {
    switch (input) {
        case "art" :
            setArtWork(true)
            setWIP(false)
            setFollowing(false)
            setAbout(false)
            setRefresh(!refresh)
            break;
        case "inProgress": 
            setWIP(true)
            setArtWork(false)
            setFollowing(false)
            setAbout(false)
            setRefresh(!refresh)
            break;
        case "follow": 
            setFollowing(true)
            setArtWork(false)
            setWIP(false)
            setAbout(false)
            setRefresh(!refresh)
            break;
        case "aboutMe": 
            setAbout(true)
            setArtWork(false)
            setFollowing(false)
            setWIP(false)
            setRefresh(!refresh)
            break;
    }
}
const getData = (input) => {
    (async () => {
        try {
            // console.log(id)
            const response = await axios.get(`/api/users/${input}`)
            // console.log("response is",response)
            setUpdatedUser(response.data)
            // console.log("updated user is",updatedUser)
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

const getLoggedInUser = (input) => {
    (async () => {
        try {
            // console.log(id)
            const response = await axios.get(`/api/users/${input}`)
            // console.log("response is",response)
            setLoggedInUser(response.data)
            // console.log("updated user is",updatedUser)
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
    console.log("LSID is", userId)
    getData(id)
    console.log("user._id is",user)
    getLoggedInUser(userId)
    choice("aboutMe")
},[])

    const loaded = () => {
        return (
            <div className={styles.mainProfileWrapper}>
            
            <div className={styles.innerProfileWrapper}>
                {/* {console.log("PP updated user is", updatedUser.artCollection)} */}
                <Navbar loggedInUser={loggedInUser} user={user}/>
                <UserBioBar updatedUser={updatedUser} id={id} user={user}/>
                <ListBar updatedUser={updatedUser} user={user}setRefresh={setRefresh} setArtWork={setArtWork} setWIP={setWIP} setFollowing={setFollowing} setAbout={setAbout} setDisplayContent={setDisplayContent} displayContent={displayContent} about={about} WIP={WIP} artwork={artwork} following={following} />
                <UserAboutMe updatedUser={updatedUser}/>
                <Footer/>
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