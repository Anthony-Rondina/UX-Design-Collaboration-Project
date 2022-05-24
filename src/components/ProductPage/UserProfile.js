import styles from './UserProfile.module.css';
import { useRef,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
export default function UserProfile({refresh, setRefresh,art, user}) {
    const text =useRef()
    const navigate = useNavigate();
    let token = localStorage.getItem("token")
    const loaded = () => {
        return (
            <Link to={`/user/${art.user._id}`}>
                <div className={styles.UserProfile}>
                <div className={styles.CircleImg} style={{backgroundImage: `url(${art.user.avatar})`}}></div>
            
            <div className={styles.UserNameText}>
                <h1>{art.nameOfArt}</h1>
                <div className={styles.UserFollowDiv}>
                    <h2>{art.user.firstName}</h2>
                </div>
            </div>
            </div>
            </Link>
        )
    }
    const loading = () => {
        return <h1>Loading</h1>
    }
    const handleSubmit = async (e) => {
        // e.preventDefault()
        try {
            console.log("test")
            const response = await axios.post(`/api/comments/${art._id}`, {
                text: text.current.value
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            // setRefresh(!refresh)
            navigate(`/art/${art._id}`)
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async (id) => {
        // e.preventDefault()
        try {
            // console.log(token)
            const response = await axios.delete(`/api/comments/${art._id}`)
            setRefresh(!refresh)
            navigate(`/art/${art._id}`)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        art && art.user ? loaded() : loading()
       )
}