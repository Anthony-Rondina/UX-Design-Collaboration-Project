import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/atelier-1.png';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
    <footer className={styles.Footer}>
        <div className={styles.footerLogo}>
            <Link to="/" className="footer-logo"><img src={logo} style={{ width: '8rem' }} id="logo" alt="footer logo"></img></Link>
            <ul style={{ padding: '5px', margin: '5px', marginRight: '8px' }}>
                <li style={{ padding: '0' }}>
                <i className="fa-brands fa-twitter fa-lg"></i>
                </li>
                <li >
                <i className="fa-brands fa-facebook fa-lg"></i>
                </li>
                <li >
                <i className="fa-brands fa-instagram fa-lg"></i>
                </li>
                <li >
                <i className="fa-brands fa-youtube fa-lg"></i>
                </li>
            </ul>
        </div>
        <ul style={{ padding: '0' }}>
            <li style={{ padding: '0' }}>
                <Link to="/" className="footer-link">About Us</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Terms of Service</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">FAQs</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Code of Conduct</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Contact Us</Link>
            </li>
        </ul>
        <form className={styles.footerForm} action="" method="get">
            <div>
                <label type="email">Subscribe to atelier newsletter</label><br></br>
                <input type="email" name="email" id="email" required/>
                <input className={styles.submitBtn} type="submit" value="Submit"/>
            </div>
        </form>
    </footer>
    );
}