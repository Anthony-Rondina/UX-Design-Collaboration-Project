import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
export default function UserArtwork({user}) {
    const [updatedUser, setUpdatedUser] =useState({})
    const [refresh, setRefresh] = useState(false)
    


    const getData = (input) => {
        (async () => {
            try {
                const response = await axios.get(`/api/user/${user._id}`)
                // console.log(response)
                setUpdatedUser(response.data.foundUser)
                // console.log(cards)
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
        getData()
    },[])

    return (
        <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    <h1>{updatedUser.username}</h1>
                    <div>
                        <Link to={`/user/${user._id}/upload`}><img src="https://i.imgur.com/JoSbsoa.png" alt="" className={styles.userUpload} /></Link>
                        {console.log(user.artCollection)}
                        {/* {updatedUser.artCollection.map((art) => {
                            <img src={art.image} alt="user art" />
                        })} */}
                    </div>
                </div>
        </div>
    )
}