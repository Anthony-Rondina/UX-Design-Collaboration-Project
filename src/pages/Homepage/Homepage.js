import ArtistCard from "../../components/ArtistCard/ArtistCard"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import styles from "./Homepage.module.css"
import NavHeader from "../../components/NavHeader/NavHeader"
import Footer from "../../components/Footer/Footer"
import FilterBtn from "../../components/FilterBtn/FilterBtn"

export default function Homepage({ user, setUser, toggle, setToggle }) {
    const [artArr, setArtArr] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState({})
    const [btn, setBtn] = useState("All");
    const { id } = useParams()
    let userId = localStorage.getItem("userID")
    const getData = (input) => {
        (async () => {
            try {
                if (btn === "All") {
                    const response = await axios.get(`/api/art/`)
                    setArtArr(response.data)
                    console.log(response.data)
                } else {
                    console.log(btn)
                    const response = await axios.get(`/api/art/${input}`)
                    console.log("response is", response.data)
                    setArtArr(response.data)
                    console.log("art array is", artArr)
                    if (response.status === 200) {
                        setRefresh(!refresh)
                    } else {
                        console.log('Something went wrong')
                    }
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
        getData(btn)
    }, [btn])
    const loaded = () => {
        return (
            <div className={styles.mainProfileWrapper}>
                <div className={styles.innerProfileWrapper}>
                    <div>
                        <NavHeader user={user} setUser={setUser} loggedInUser={loggedInUser} toggle={toggle} setToggle={setToggle} />
                        <div className={styles.topText}>
                            Check out other Artist's Workshops
                        </div>
                        <div className={styles.discoverArt}>
                            {artArr.map((artData, idx) => {
                                return (
                                    <div>
                                        <Link className={styles.userAvatar} to={`/user/${artData.user._id}`}> <img src={artData.user.avatar} style={{ width: 60, height: 60, borderRadius: 40, margin: "5px 60px 5px 60px" }} /></Link>
                                        <div className={styles.artText} >{artData.user.username}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.topText}>
                            Projects from artists you follow and more
                        </div>
                        <div className={styles.filterBar}>
                            <FilterBtn btn={btn} setBtn={setBtn} />
                        </div>
                        <div className={styles.artArray}>
                            {artArr.map((artData, idx) => {
                                return (
                                    <ArtistCard user={user} artData={artData} key={idx} className={styles.artistCard} />
                                )
                            })}
                        </div>
                        <Footer />
                    </div>
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
};

