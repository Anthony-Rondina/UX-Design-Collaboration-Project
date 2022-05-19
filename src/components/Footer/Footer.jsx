import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/atelier-1.png';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
    <footer className={styles.Footer}>
        <div className="footer-logo">
            <img src={logo} style={{ width: '8rem' }} id="logo" alt="footer logo"></img>
            <ul>
                <li>
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </li>
                <li>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </li>
                <li>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </li>
                <li>
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </li>
            </ul>
        </div>
        <ul>
            <li>
                <Link to="#" className="footer-link">About Us</Link>
            </li>
            <li>
                <Link to="#" className="footer-link">Terms of Service</Link>
            </li>
            <li>
                <Link to="#" className="footer-link">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#" className="footer-link">FAQs</Link>
            </li>
            <li>
                <Link to="#" className="footer-link">Code of Conduct</Link>
            </li>
            <li>
                <Link to="#" className="footer-link">Contact Us</Link>
            </li>
        </ul>
        <div class="footer-search-container">
            <h6>Subscribe to atelier newsletter</h6>
            <form>
                <input type="text" name="search"/>
            </form>
        </div>
        <button className={styles.submitBtn} type="submit">Submit</button>
    </footer>
    );
}