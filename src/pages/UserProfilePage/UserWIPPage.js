
import { Link } from "react-router-dom"
import { useState, useEffect, usepar } from "react"
import UserWIP from "../../components/UserProfilePage/UserWIP"
import ListBar from "../../components/UserProfilePage/ListBar"
import UserBioBar from "../../components/UserProfilePage/UserBioBar"
import styles from "../../components/UserProfilePage/UPPC.module.css"
import Navbar from "../../components/NavHeader/NavHeader"
import axios from "axios"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
export default function UserWIPPage({setChosenWork,chosenUser, user}) {
const [refresh, setRefresh] = useState(false)
const [artwork, setArtWork] = useState(true)
const [WIP, setWIP] = useState(false)
const [following, setFollowing] = useState(false)
const [about, setAbout]=useState(false)
const [displayContent, setDisplayContent]=useState([])
const [updatedUser, setUpdatedUser]=useState({})
const [loggedInUser, setLoggedInUser]=useState({})
const { id } = useParams()
const [toggle, setToggle] = useState(false)

let userId = localStorage.getItem("userID")
const [workInProgress,setWorkInProgress]=useState([])
let token = localStorage.getItem("token")
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
                // console.log(`/api/art/wip/${input}`)
                const response = await axios.get(`/api/art/wip/${input}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                // test getting all the art
                // const response = await axios.get(`/api/users/${input}`)

                // console.log("response data is",response.data)
                setWorkInProgress(response.data)
                // console.log("WIP is",workInProgress )
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

    const getUser = (input) => {
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
    const followUser = (id,user_id) => {
        (async () => {
            try {
    
                const response = await axios.patch(`/api/users/${user_id}/follow/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
    
                console.log(response)
    
    
                if (response.status === 200) {
                    setToggle(!toggle)
                } else {
                    console.log('Something went wrong')
                }
    
            } catch (err) {
                console.log(err)
                // console.log(`cards is ${cards}`)
            }
        })()
    }
    
    const unfollowUser = (id,user_id) => {
        (async () => {
            try {
    
                const response = await axios.patch(`/api/users/${user_id}/unfollow/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
    
                console.log(response)
    
    
                if (response.status === 200) {
                    setToggle(!toggle)
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
        getUser(id)
        console.log("user._id is",user)
        getLoggedInUser(userId)
        choice("inProgress")
    },[toggle])

    const loaded = () => {
        return (
            <div className={styles.mainProfileWrapper}>
            
            <div className={styles.innerProfileWrapper}>
                {/* {console.log("PP updated user is", updatedUser.artCollection)} */}
                <Navbar loggedInUser={loggedInUser}user={user}/>
                <UserBioBar followUser={followUser} unfollowUser={unfollowUser} loggedInUser={loggedInUser} updatedUser={updatedUser} id={id} user={user}/>
                <ListBar updatedUser={updatedUser} user={user}setRefresh={setRefresh} setArtWork={setArtWork} setWIP={setWIP} setFollowing={setFollowing} setAbout={setAbout} setDisplayContent={setDisplayContent} displayContent={displayContent} about={about} WIP={WIP} artwork={artwork} following={following} />
                <UserWIP workInProgress={workInProgress} setChosenWork={setChosenWork} choice={choice} updatedUser={updatedUser} user={user}about={about} WIP={WIP} artwork={artwork} following={following} />
                <Footer/>
            </div>
        </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     user && workInProgress ? loaded() : loading()
    )
}