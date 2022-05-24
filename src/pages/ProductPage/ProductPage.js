import ArtPrompt from "../../components/ProductPage/ArtPrompt"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import styles from "./ProductPage.module.css"
import UserProfile from "../../components/ProductPage/UserProfile"
import NavHeader from "../../components/NavHeader/NavHeader"
import Footer from "../../components/Footer/Footer"
import Gallery from "../../components/ProductPage/Gallery"
import Comments from "../../components/ProductPage/Comments"

export default function ProductPage({chosenWork, user, setUser, toggle, setToggle}) {
    const { id } = useParams()
    const [art,setArt]= useState({})
    const [refresh, setRefresh] = useState(false)
    let userId = localStorage.getItem("userID")
    const [loggedInUser, setLoggedInUser]=useState({})
    const getData = (input) => {
        (async () => {
            try {
                // console.log(id)
                const response = await axios.get(`/api/art/chosenart/${input}`)
                console.log("response is",response.data)
                setArt(response.data)
                // console.log("art  is", art)
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
        getData(id)
        getLoggedInUser(userId)
    },[])
    const loaded = () => {
        return (
            <>
    
            <div className={styles.mainProfileWrapper}>
            
                <div className={styles.innerProfileWrapper}>
                < NavHeader loggedInUser={loggedInUser} user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>
                    <div className={styles.OutterWraper}>
                        <div className={styles.InnerWraper}>
                            <UserProfile user={user} art={art} />
                            {/* <div className={styles.ChosenImage} style={{backgroundImage: `url(${art.image})`}}></div> */}
                            {loggedInUser._id === art.user._id ? 
                                <div className={styles.EditButton}>
                                <Link to={`/user/chosenart/edt/${art._id}/${art.user._id}`}><p>Click me to Edit Art!</p></Link>
                                </div>
                                : 
                                ""
                            }
                            
                            <img className={styles.ChosenImage} src={art.image}></img>
                            <ArtPrompt  art={art}/>
                            {/* <Gallery /> */}
                            <Comments refresh={refresh} setRefresh={setRefresh} user={user} art={art}/>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            
            </>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     art && art.user ? loaded() : loading()
    )
}