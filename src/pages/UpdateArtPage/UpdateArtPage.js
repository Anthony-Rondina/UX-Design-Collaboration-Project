
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styles from "../UserUploadArtPage/UserUploadArtPage.module.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UserBioBar from "../../components/UserProfilePage/UserBioBar";
import Navbar from "../../components/NavHeader/NavHeader"
import Footer from "../../components/Footer/Footer";
export default function UpdateArtPage({art, user}) {
    const navigate = useNavigate();
    const type = useRef()
    const nameOfArt = useRef()
    const isDone = useRef()
    const image = useRef()
    const artPrompt = useRef()
    const supplies = useRef()
    const [updatedUser, setUpdatedUser]=useState({})
    const [refresh, setRefresh] = useState(false)
    const { id } = useParams()
    const {userId} = useParams()
    const [editArt, setEditArt] = useState({})

    let token = localStorage.getItem("token")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(`test`)
            const response = await axios.put(`/api/art/${id}`, {
                type: type.current.value, nameOfArt: nameOfArt.current.value, isDone: isDone.current.checked, image: image.current.value,artPrompt: artPrompt.current.value, supplies: supplies.current.value
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            navigate(`/art/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
    const getData = (input) => {
        (async () => {
            try {
                // console.log(id)
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
    const getArt = (input) => {
        (async () => {
            try {
                // console.log(id)
                const response = await axios.get(`/api/art/chosenart/${input}`)
                console.log("response is",response)
                setEditArt(response.data)
                console.log("updated art is",response.data)
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
        getArt(id)
        getData(userId)
    },[])

    const loaded = () => {
        return (
            <div className={styles.UserUploadArtPage}>
                <div className={styles.mainProfileWrapper}>
                    <div >
                        <div className={styles.innerProfileWrapper}>
                            <Navbar/>
                            <UserBioBar updatedUser={updatedUser} id={userId} user={user}/>
                            <div className={styles.uploadFormWrapper}>
                                <h1>Update your art!</h1>
                                <a href={`/art/${id}`}><button>Back to Profile</button></a>
                                <form className={styles.uploadForm} onSubmit={handleSubmit}>
                                <p>What type of art is this?</p>
                                <label className={styles.inputLabel}> 
                                        <select defaultValue={editArt.type} ref={type}>
                                        <option value="WATERCOLOR">
                                            WATERCOLOR
                                        </option>
                                        <option value="CANVAS">
                                            CANVAS
                                        </option>
                                        <option value="QUILLING">
                                            QUILLING
                                        </option>
                                        <option value="ACRYLIC">
                                            ACRYLIC
                                        </option>
                                        <option value="PAPERART">
                                            PAPER-ART
                                        </option>
                                        </select>
                                    </label>
                                    <p>What is title of this peice?</p>
                                    <input defaultValue={editArt.nameOfArt} className={styles.uploadInput} placeholder='Enter title of art' type="text" ref={nameOfArt} />
                                    <p>Is the work completed?</p>
                                    <input defaultValue={editArt.isDone} placeholder='Enter card number'  type="checkbox" className={styles.largeCheckBox} ref={isDone} />
                                    <p>Where is the image located?</p>
                                    <input defaultValue={editArt.image} className={styles.uploadInput} placeholder="Enter link to art" type="text" ref={image} />
                                    <p>What supplies are needed?</p>
                                    <input defaultValue={editArt.supplies} className={styles.uploadInput} placeholder="Enter supply list" type="text" ref={supplies} />
                                    <p>What do you want the viewer to know?</p>
                                    <input defaultValue={editArt.artPrompt} className={styles.uploadInput} placeholder="Enter art prompt" type="text" ref={artPrompt} />
                                    <input type="submit" value="Update your art!" />
                                </form>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     editArt ? loaded() : loading()
    )
    
}