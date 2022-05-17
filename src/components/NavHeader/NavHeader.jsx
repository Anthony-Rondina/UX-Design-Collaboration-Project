import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/atelier-1.png';
import styles from "./NavHeader.module.css";
export default function NavHeader() {
    return (
    <div className={styles.NavHeader}>
        <Link to="#" className="nav-logo"><img src={logo} style={{ width: '8rem' }} id="logo" alt="nav logo"></img></Link>
        <ul>
            <li>
                <Link to="#" className="nav-link">Discover</Link>
            </li>
            <li>
                <Link to="#" className="nav-link">Tutorials</Link>
            </li>
        </ul>
        <div class="search-container">
            <form>
<<<<<<< HEAD
                <input type="text" placeholder="Search for inspiration, creatives, tutorials..." results="0" name="search"/>
=======
                <input type="text" placeholder="&#x1F50D; Search for inspiration, creatives, tutorials..." name="search" results="0"/>
>>>>>>> 6f54b72c17f351243d940917784f2b4ef990d9db
            </form>
        </div>
        <button className={styles.signInBtn} type="submit">Sign In</button>
        <button className={styles.signUpBtn} type="submit">Sign Up</button>
    </div>
    );
}