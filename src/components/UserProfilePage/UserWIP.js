import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserWIP({setChosenWork,workInProgress, user, id}) {
    const loaded = () => {
        return (
            <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    {/* <h1>{updatedUser.username}</h1> */}
                    {/* {console.log("user id is", updatedUser._id)} */}
                    <div className={styles.artFlexbox}>
                        {/* {console.log} */}
                        {/* {workInProgress.artCollection.map((art, idx) => {
                            // console.log(art)
                            return (
                                <Link to={`/art/${art._id}`} onClick={() => { setChosenWork(art) }}><div 
                                key={idx} 
                                className={styles.mappedArt} 
                                style={{backgroundImage: `url(${art.image})`}}>   
                                </div></Link>
                                )
                        })} */}
                    </div>
                </div>
        </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }


    return workInProgress ? loaded() : loading()
}