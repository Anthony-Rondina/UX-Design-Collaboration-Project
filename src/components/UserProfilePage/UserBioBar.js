// import coverImage from "./"
import { Link } from "react-router-dom"
import styles from "./UPPC.module.css"
import coverImage from "./Cover-Image.jpg"
export default function UserBioBar({user}) {
    return (
        <div className={styles.userBioWrapper}>
            <div className={styles.userCoverImage}>
                <img className={styles.coverImage} src={coverImage} alt="user cover image" />
            </div>
            <div className={styles.userInfo}>
                {/* Change User.avatar to actual props once implimented */}
                <img className={styles.profilePic}src="https://ctorthopaedic.com/wp-content/uploads/2017/01/profile-silhouette.jpg" alt="" />
                <div className={styles.rightHalf}>
                    <div className={styles.userUpperOptions}>
                        <div className="welcome">
                            {/* replace NAME with user.name once implimented */}
                            <p className={styles.welcomeUser}>{`Hello, ${user.username}.`}</p> 
                            {console.log(user)} 
                            {/* replace CANVAS with user.type once implimented */}
                            {/* <p className="type">{`CANVAS.`}</p>   */}
                        </div>
                    </div>
                    <div className={styles.userBottomOptions}>
                        <Link to="/"><button className={styles.clickButton}>Edit Profile</button></Link>
                        {/* This button will toggle a modal for additional options */}
                        <button className={styles.clickButton}>...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}