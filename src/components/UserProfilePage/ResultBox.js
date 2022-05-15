import styles from "./UPPC.module.css"

export default function ResultBox({artwork, WIP, about, following }) {
    return (
        <div className={styles.filterResults}>
            {artwork ? 
                <div className={styles.contentBox}>
                    <h1>YAAAAAY MY ARTWORK!!!</h1>
                </div>
                :
                WIP ?
                <div className={styles.contentBox}>
                    <h1>YAAAAAY WORKS IN PROGRESS!!!</h1>
                </div>
                :
                about ?
                <div className={styles.contentBox}>
                    <h1>YAAAAAY ABOUT ME!!!</h1>
                </div>
                :
                following ?
                <div className={styles.contentBox}>
                    <h1>YAAAAAY FOLLOWING!!!</h1>
                </div>
                :
                ""
            } 
        </div>
    )
}