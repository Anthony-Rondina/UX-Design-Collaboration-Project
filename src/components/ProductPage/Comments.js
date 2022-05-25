import { useRef,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styles from './UserProfile.module.css';
export default function Comments({toggle, setToggle, refresh, setRefresh,art, user}) {
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
    const handleDelete = async (input1, input2) => {
        try {
            const response = await axios.delete(`/api/comments/${input1}/delete/${input2}`)
            // setToggle(!toggle)
            window.location.reload(false);
            // navigate(`/art/${art._id}`)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={styles.outMostWrapper}>
            <div className={styles.formOutterWrapper}>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p>Leave a Comment!</p>
                        <textarea className={styles.commentsbox} placeholder='Enter comment' type="text" ref={text} />
                        <div className="submit-button">
                            <input className={styles.commentBtn} type="submit" value="Add Comment" />
                        </div>
                    </form>
                    <hr className={styles.line1} />
                </div>
            </div>
            {art.comments ?
                <div className={styles.commentBlock}>
                    {art.comments.map((comment, idx) => {
                    
                        return (
                            
                            // <div key={idx}> 
                            <>
                                
                                <div className={styles.commentUser}>
                                    <span className={styles.commentLeftSide}>{`${comment.user.firstName}`}</span>
                                    {user.email === comment.user.email || user.email === art.user.email ?
                                        <button className={styles.deleteButton} onClick={() => { handleDelete(art._id, comment._id) }}>Delete Comment</button>
                                        : ''}
                                </div>
                                <div className="comment-content">
                                    <p className={styles.comment}>{comment.text}</p>
                                </div>
                                <hr className={styles.line2} />
                            </>
                            // </div>
                        )
                    })}
                    <hr className={styles.line3} />
                </div>
                
            :
            ""
            }
        </div>
    )   
}