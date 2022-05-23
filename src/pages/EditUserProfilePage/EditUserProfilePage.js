
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styles from "./EditUserProfilePage.module.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UserBioBar from "../../components/UserProfilePage/UserBioBar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavHeader/NavHeader"
export default function EditUserProfilePage({toggle, setToggle, user}) {
    const navigate = useNavigate();
    const username = useRef()
    const avatar = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const bio = useRef()
    const [updatedUser, setUpdatedUser] = useState({})
    const [refresh, setRefresh] = useState({})
    const {id} = useParams()
    const [loggedInUser, setLoggedInUser]=useState({})
    let token = localStorage.getItem("token")
    let userId = localStorage.getItem("userID")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(`test`)
            const response = await axios.put(`/api/users/${updatedUser._id}`, {
                username: username.current.value, avatar: avatar.current.value, firstName: firstName.current.value, lastName: lastName.current.value,email: email.current.value, bio: bio.current.value
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(`test2`)

            navigate(`/user/${updatedUser._id}`)
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
        console.log("LSID is", userId)
        getData(id)
        console.log("user._id is",user)
        getLoggedInUser(userId)
    },[])
    return (
        <div className={styles.UserUploadArtPage}>
            <div className={styles.mainProfileWrapper}>
                <div >
                    <div className={styles.innerProfileWrapper}>
                        <Navbar loggedInUser={loggedInUser} user={user}/>
                        <UserBioBar loggedInUser={loggedInUser} id={id}updatedUser={updatedUser} user={user}/>
                        <div className={styles.uploadFormWrapper}>
                        <Link to={`/user/${updatedUser._id}`}><button>Back to profile</button></Link>
                            <form className={styles.uploadForm} onSubmit={handleSubmit}>
                            <p>UserName:</p>
                            <input defaultValue={updatedUser.username} className={styles.uploadInput} placeholder='Enter username' type="text" ref={username} />
                                <p>Profile Picture</p>
                                <input defaultValue={updatedUser.avatar} className={styles.uploadInput} placeholder='Enter link for profile picture' type="text" ref={avatar} />
                                <p>First Name</p>
                                <input defaultValue={updatedUser.firstName} className={styles.uploadInput} placeholder='Enter First Name'  type="text" ref={firstName} />
                                <p>Last Name</p>
                                <input defaultValue={updatedUser.lastName} className={styles.uploadInput} placeholder="Enter Last Name" type="text" ref={lastName} />
                                <p>Email</p>
                                <input defaultValue={updatedUser.email} className={styles.uploadInput} placeholder="Enter updated email" type="text" ref={email} />
                                <p>Bio</p>
                                <textarea defaultValue={updatedUser.bio} className={styles.uploadInput} placeholder="Tell us about yourself" type="text" ref={bio} />
                                <input type="submit" value="Update Your Profile!" />
                            </form>
                            
                        </div>
                    </div>
                    <Footer/>
                </div>
                
            </div>

        
        </div>
    )
}