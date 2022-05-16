
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styles from "./UserUploadArtPage.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserBioBar from "../../components/UserProfilePage/UserBioBar";
export default function UserUploadArtPage() {
    const navigate = useNavigate();
    const type = useRef()
    const nameOfArt = useRef()
    const isDone = useRef()
    const image = useRef()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // const response = await axios.post("/api/cards/", {
            //     type: type.current.value, nameOfArt: nameOfArt.current.value, isDone: isDone.current.checked, image: image.current.value
            // })
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
                        <UserBioBar/>
                        <div className={styles.uploadFormWrapper}>
                            <h1>Upload your art!</h1>
                            <a href="/user/DYNAMICID"><button>Back to Profile</button></a>
                            <form onSubmit={handleSubmit}>
                                <p>What type of Art is this work?</p>
                                <input placeholder='Enter art type' type="text" ref={type} />
                                <p>What is title of this peice?</p>
                                <input placeholder='Enter title of art' type="text" ref={nameOfArt} />
                                <p>Is the work completed?</p>
                                <input placeholder='Enter card number'  type="checkbox" className={styles.largeCheckBox} ref={isDone} />
                                <p>Where is the image located?</p>
                                <input placeholder="Enter link to art" type="text" ref={image} />
                                <input type="submit" value="Upload your art!" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}