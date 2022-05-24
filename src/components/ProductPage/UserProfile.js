import styles from './UserProfile.module.css';
import { useRef,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
export default function UserProfile({art}) {
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
        <div>
            <div className={styles.formOutterWrapper}>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p>Leave a Comment!</p>
                        <textarea className={styles.commentsbox} placeholder='Enter comment' type="text" ref={text} />
                        <div className="submit-button">
                            <input type="submit" value="Add Comment" />
                        </div>
                    </form>
                </div>
            </div>
            {art.comments ?
                <div className="commentBlock">
                    {/* {console.log("comments is",art.comments)} */}
                    {art.comments.map((comment, idx) => {
                    // console.log(comment._id)
                        return (
                            
                            <div key={idx} className="comment">
                                {console.log("comment is",comment)}
                                <div className="comment-content">
                                    <p>{comment.text}</p>
                                </div>
                                <div className="comment-user">
                                    <p>{`Posted by: ${comment.user.firstName}`}</p>
                                    
                                    {user.email === comment.user.email || user.admin ?
                                        <button className="delete-button" onClick={() => { handleDelete(comment._id) }}>Delete Comment</button>
                                        : ''}
                                </div>
                            </div>
                        )
                    })}
                </div>
            :
            ""
            }
        </div>
    )   
}