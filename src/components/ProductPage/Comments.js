// import styles from './UserProfile.module.css';
import { useRef,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Comments({refresh, setRefresh,art, user}) {
    const text =useRef()
    const navigate = useNavigate();
    let token = localStorage.getItem("token")

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
            <div className="form-outter-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p>Leave a Comment!</p>
                        <textarea className="enter-comment-content" placeholder='Enter comment' type="text" ref={text} />
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


