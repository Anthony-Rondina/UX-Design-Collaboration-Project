
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styles from "./UserUploadArtPage.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserBioBar from "../../components/UserProfilePage/UserBioBar";
import Navbar from "../../components/NavHeader/NavHeader"
export default function UserUploadArtPage({user}) {
    const navigate = useNavigate();
    const type = useRef()
    const nameOfArt = useRef()
    const isDone = useRef()
    const image = useRef()
    const artPrompt = useRef()
    const supplies = useRef()
    let token = localStorage.getItem("token")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(`test`)
            const response = await axios.post("/api/art/", {
                type: type.current.value, nameOfArt: nameOfArt.current.value, isDone: isDone.current.checked, image: image.current.value,artPrompt: artPrompt.current.value, supplies: supplies.current.value
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(`test2`)
            navigate("/user/IDGOESHERE!")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={styles.UserUploadArtPage}>
            <div className={styles.mainProfileWrapper}>
                <div >
                    <div className={styles.innerProfileWrapper}>
                        <Navbar/>
                        <UserBioBar user={user}/>
                        <div className={styles.uploadFormWrapper}>
                            <h1>Upload your art!</h1>
                            <a href={`/user/${user._id}`}><button>Back to Profile</button></a>
                            <form className={styles.uploadForm} onSubmit={handleSubmit}>
                            <p>What type of art is this?</p>
                            <label> 
                                    <select ref={type}>
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
                                <input className={styles.uploadInput} placeholder='Enter title of art' type="text" ref={nameOfArt} />
                                <p>Is the work completed?</p>
                                <input placeholder='Enter card number'  type="checkbox" className={styles.largeCheckBox} ref={isDone} />
                                <p>Where is the image located?</p>
                                <input className={styles.uploadInput} placeholder="Enter link to art" type="text" ref={image} />
                                <p>What supplies are needed?</p>
                                <input className={styles.uploadInput} placeholder="Enter supply list" type="text" ref={supplies} />
                                <p>What do you want the viewer to know?</p>
                                <input className={styles.uploadInput} placeholder="Enter art prompt" type="text" ref={artPrompt} />
                                <input type="submit" value="Upload your art!" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}