import ArtistCard from "../../components/ArtistCard/ArtistCard"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import styles from "./Homepage.module.css"
import NavHeader from "../../components/NavHeader/NavHeader"
import Footer from "../../components/Footer/Footer"

export default function Homepage({ user, setUser, toggle, setToggle }) {
    const [artArr, setArtArr] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [loggedInUser, setLoggedInUser]=useState({})
    const { id } = useParams()
    let userId = localStorage.getItem("userID")
    const getData = () => {
        (async () => {
            try {
                const response = await axios.get(`/api/art/`)
                console.log("response is", response)
                setArtArr(response.data)
                console.log("updated art", response.data)
                if (response.status === 200) {
                    setRefresh(!refresh)
                } else {
                    console.log('Something went wrong')
                }

            } catch (err) {
                console.log(err)
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
        getLoggedInUser(userId)
        getData(id)
    }, [])
    const loaded = () => {
        return (
            <div>
                <NavHeader user={user} setUser={setUser} loggedInUser={loggedInUser} toggle={toggle} setToggle={setToggle}/>
                <div className={styles.discoverArt}>
                    {artArr.map((artData, idx) => {
                        return (
                            <div>
                                <Link to={`/user/${artData.user._id}`}> <img src={artData.user.avatar} style={{ width: 69, height: 69, borderRadius: 40, margin: "5px 140px 3px 140px" }} /></Link>
                                <div className={styles.artText} >{artData.user.username}</div>
                            </div>
                        )
                    })}

                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {artArr.map((artData, idx) => {
                        return (
                            <ArtistCard user={user} artData={artData} key={idx} className={styles.artistCard} />
                        )
                    })}
                </div>
                <Footer />
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
        user && user.artCollection ? loaded() : loading()
    )
};

