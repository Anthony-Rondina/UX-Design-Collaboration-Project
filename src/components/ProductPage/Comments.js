
import { useRef,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styles from './UserProfile.module.css';
export default function Comments({refresh, setRefresh,art, user}) {
    const text =useRef()
    const navigate = useNavigate();
    let token = localStorage.getItem("token")

    const handleSubmit = async (e) => {
        // e.preventDefault()
        try {
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
    const handleDelete = async (input) => {
        // e.preventDefault()
        try {
            console.log("tried")
            const response = await axios.delete(`/api/comments/${input}`)
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
                            <input className={styles.commentBtn} type="submit" value="Add Comment" />
                        </div>
                    </form>
                </div>
            </div>
            {art.comments ?
                <div className={styles.commentBlock}>
                    {/* {console.log("comments is",art.comments)} */}
                    {art.comments.map((comment, idx) => {
                    // console.log(comment._id)
                        return (
                            
                            <div key={idx} className="comments">
                                {console.log("comment is",comment)}
                                <div className="comment-content">
                                    <p className={styles.comment}>{comment.text}</p>
                                </div>
                                <div className="comment-user">
                                    <p className={styles.commentUser}>{`Posted by: ${comment.user.firstName}`}</p>
                                    
                                    {user.email === comment.user.email || user.admin ?
                                        <button className={styles.deleteBtn} onClick={() => { handleDelete(comment._id) }}>Delete Comment</button>
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


