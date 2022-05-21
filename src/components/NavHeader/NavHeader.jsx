import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/atelier-1.png';
import styles from "./NavHeader.module.css";
export default function NavHeader({loggedInUser,user}) {
    return (
    <div className={styles.NavHeader}>
        {console.log('user is ', user)}
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
            <i className="fa-solid fa-magnifying-glass"><input type="text" placeholder="Search for inspiration, creatives, tutorials..." name="search"></input></i>
            </form>
        </div>
        {user ? 
        <>
        <div className={styles.profilePicture} style={{backgroundImage: `url(${user.avatar})`}}/>
        <div className={styles.logOutDiv}></div>
        </>
        :
        <div>
        <button className={styles.signInBtn} type="submit">Sign In</button>
        <button className={styles.signUpBtn} type="submit">Sign Up</button>
        </div>
    }
    </div>
    );
}