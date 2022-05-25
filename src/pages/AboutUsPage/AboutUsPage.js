import { useState, useEffect } from "react"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"
import NavHeader from "../../components/NavHeader/NavHeader"
import Footer from "../../components/Footer/Footer"
import styles from "../AboutUsPage/AboutUsPage.module.css"
export default function AboutUsPage({setUser, user, toggle, setToggle}) {
        const [refresh, setRefresh] = useState({})
        let userId = localStorage.getItem("userID")
        const [loggedInUser, setLoggedInUser]=useState({})
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
                getLoggedInUser(userId)
            },[])

    return (
        <div className={styles.mainProfileWrapper}>
            
        <div className={styles.innerProfileWrapper}>
    <NavHeader setUser={setUser} toggle={toggle} setToggle={setToggle} loggedInUser={loggedInUser} user={user}/>
    <h1 className={styles.AboutUsHeader}>The Creators</h1>
    <div className={styles.AboutUsPage}>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/Wd1jsr2.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Anthony Rondina</h5>
                <p>Project Manager / Git Czar / Front-End</p>
                <a href='https://github.com/Anthony-Rondina'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/arondina/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/LczRoZB.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>James Suescun</h5>
                <p>Project Manager / Trello Master / Back-End</p>
                <a href='https://github.com/jayworks2318'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/find-james/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/ksy5HM5.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Luke Fleming</h5>
                <p>Full-Stack</p>
                <a href='https://github.com/LukeFleming90'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/luke-ryan-fleming/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/URVrWGa.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Jeanette Chavarin</h5>
                <p>Front-End</p>
                <a href='https://github.com/jeanette613'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/jeanette-chavarin/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/s7Y8UJl.jpg?2" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div classNames={styles.AboutUsContainer}>
                <h5>Ornela Pashaj</h5>
                <p>Front-End</p>
                <a href='https://github.com/opashaj5'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/ornelapashaj/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/UQ8HkpA.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Phong Nguyen</h5>
                <p>Back-End</p>
                <a href='https://github.com/typhoon1zero2'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/phong-nguyen-b9520b22b/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/2tYRr39.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>John Chung</h5>
                <p>Front-End</p>
                <a href='https://github.com/jchung501'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/johnchungg/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/ilVX1Eb.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Cory Hangan</h5>
                <p>Front-End</p>
                <a href='https://github.com/CBhangs'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/coryhangan/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
        </div>
        <div>
                <div>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/waQVRnF.png?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Rajani P</h5>
                <p>UX Designer</p>
                </div>
        </div>
        <div className={styles.AboutUsCard}>
                <img src="https://i.imgur.com/8ddVVIK.jpg?1" style={{ width: '180px', borderRadius: '5px 5px 0 0' }}/>
                <div className={styles.AboutUsContainer}>
                <h5>Neelam Bridgemohan</h5>
                <p>UX Designer</p>
                </div>
        </div>
        <div>
                <div>
                </div>
        </div>
    </div>
    <Footer />
    </div>
    </div>
    )
};