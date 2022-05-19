import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
export default function UserArtwork({id, setChosenWork,updatedUser, user}) {
    
    const loaded = () => {
        return (
            <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    {/* <h1>{updatedUser.username}</h1> */}
                    {/* {console.log("user id is", updatedUser._id)} */}
                    <div className={styles.artFlexbox}>
                    {user._id === id ?
                            <Link to={`/user/${user._id}/upload`}><img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} /></Link>
                            :
                           ""
                        }
                        
                        {updatedUser.artCollection.map((art, idx) => {
                            // console.log(art)
                            return (
                                <Link to={`/art/${art._id}`} onClick={() => { setChosenWork(art) }}><div 
                                key={idx} 
                                className={styles.mappedArt} 
                                style={{backgroundImage: `url(${art.image})`}}>   
                                </div></Link>
                                )
                        })}
                    </div>
                </div>
        </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }


    return updatedUser && updatedUser.artCollection ? loaded() : loading()
}