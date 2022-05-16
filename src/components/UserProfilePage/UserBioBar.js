// import coverImage from "./"
import { Link } from "react-router-dom"
import styles from "./UPPC.module.css"
import coverImage from "./Cover-Image.jpg"
export default function UserBioBar() {
    return (
        <div className={styles.userBioWrapper}>
            <div className={styles.userCoverImage}>
                <img className={styles.coverImage} src={coverImage} alt="user cover image" />
            </div>
            <div className={styles.userInfo}>
                {/* Change User.avatar to actual props once implimented */}
                <img className={styles.profilePic}src="https://i.imgur.com/KnCMI31.jpg" alt="" />
                <div className={styles.rightHalf}>
                    <div className={styles.userUpperOptions}>
                        <div className="welcome">
                            {/* replace NAME with user.name once implimented */}
                            <p className={styles.welcomeUser}>{`Hello, NAME.`}</p>  
                            {/* replace CANVAS with user.type once implimented */}
                            {/* <p className="type">{`CANVAS.`}</p>   */}
                        </div>
                    </div>
                    <div className={styles.userBottomOptions}>
                        <Link to="/"><button>Edit Profile</button></Link>
                        {/* This button will toggle a modal for additional options */}
                        <button className={styles.userMore}>...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}