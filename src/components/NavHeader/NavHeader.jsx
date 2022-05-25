import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../public/atelier-1.png';
import styles from "./NavHeader.module.css";
import { useState, useEffect } from "react";
import { logout } from "../../utilities/users-service";

export default function NavHeader({loggedInUser, user, setUser, toggle, setToggle}) {
    const handleLogOut = () => {
        logout()
        setUser(null)
        console.log("Clicked Log Out")
    };

    const navigate = useNavigate()
    let userId = localStorage.getItem("userID")

    const [navToggle, setNavToggle] = useState(false)

    useEffect(() => {
        console.log(toggle)
    }, [navToggle, user, toggle])


    return (
    <div className={styles.NavHeader}>
        {/* {console.log('user is ', user)} */}
        <Link to="/" className="nav-logo"><img src={logo} style={{ width: '8rem' }} id="logo" alt="nav logo"></img></Link>
        <ul>
            <li>
                <Link to="#" className="nav-link">Discover</Link>
            </li>
            <li>
                <Link to="#" className="nav-link">Tutorials</Link>
            </li>
        </ul>
        <div className="search-container">
            <form>
            <input type="text" placeholder="Search for inspiration, creatives, tutorials..." name="search"></input>
            </form>
        </div>
        {user ? 
        <div className={styles.profilePicture} style={{backgroundImage: `url(${loggedInUser.avatar})`}} onClick={() => {setNavToggle(!navToggle)}}/>
        :
        <div>
        <button className={styles.signInBtn} type="submit">Sign In</button>
        <button className={styles.signUpBtn} type="submit">Sign Up</button>
        </div>
    }
    {
    navToggle ? 
    <>
    <div className={styles.userDropDown}>
        <div className="dropdown-content">
            <button className={styles.dropBtn} onClick={()=>{navigate(`/user/${user._id}`); setToggle(!toggle)}}>View/Edit Profile</button>
            <button className={styles.dropBtn} onClick={()=>{navigate(`/user/wip/${user._id}`); setToggle(!toggle)}}>My Work in Progress</button>
            <button className={styles.dropBtn} onClick={()=>(navigate(`/user/${user._id}/following`))}>Artists I Follow</button>
            <button className={styles.dropBtn} onClick={()=>{navigate(`/user/${user._id}/about`); setToggle(!toggle)}}>About Me</button>
            <button className={styles.dropBtn} onClick={handleLogOut}>Sign Out</button>
        </div>
    </div>
    </>
        :
        ""
        }
    </div>
    );
}