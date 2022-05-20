import styles from "./UPPC.module.css"
import { Link } from "react-router-dom"
export default function UserWIP({setChosenWork,workInProgress, user, id}) {

    

    const loaded = () => {
        return (
            <div className={styles.filterResults}>
                <div className={styles.contentBox}>
                    {/* <h1>{updatedUser.username}</h1> */}
                    {/* {console.log("WIP is", workInProgress )} */}
                    <div className={styles.artFlexbox}>
                        {console.log("FINALLY", workInProgress)}
                        {workInProgress.map((art, idx) => {
                            // console.log(art)
                            return (
                                <Link key={idx} to={`/art/${art._id}`} onClick={() => { setChosenWork(art) }}>
                                <div className={styles.mappedArt} 
                                style={{backgroundImage: `url(${art.image})`}}>   
                                </div>
                                </Link>
                                )
                        })}
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