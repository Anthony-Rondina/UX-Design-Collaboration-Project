import ArtPrompt from "../../components/ProductPage/ArtPrompt"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import styles from "./ProductPage.module.css"
import UserProfile from "../../components/ProductPage/UserProfile"
import NavHeader from "../../components/NavHeader/NavHeader"
import Footer from "../../components/Footer/Footer"
import Gallery from "../../components/ProductPage/Gallery"


export default function ProductPage({chosenWork}) {
    const { id } = useParams()
    const [art,setArt]= useState({})
    const [refresh, setRefresh] = useState(false)
    const getData = (input) => {
        (async () => {
            try {
                console.log(id)
                const response = await axios.get(`/api/art/chosenart/${input}`)
                console.log("response is",response.data)
                setArt(response.data)
                console.log("art  is", art)
                if (response.status === 200) {
                    setRefresh(!refresh)
                } else {
                    console.log('Something went wrong')
                }

            } catch (err) {
                console.log(err)
                // console.log(`cards is ${cards}`)
            }
        })()
    }
    useEffect(() => {
        getData(id)
    },[])
    const loaded = () => {
        return (
            <>
            < NavHeader />
            <div className={styles.OutterWraper}>
                <div className={styles.InnerWraper}>
                    <UserProfile art={art} />
                    {/* <div className={styles.ChosenImage} style={{backgroundImage: `url(${art.image})`}}></div> */}
                    <div className={styles.EditButton}>
                        <Link to={`/user/chosenart/edt/${art._id}/${art.user._id}`}><p>Click me to Edit Art!</p></Link>
                    </div>
                    <img className={styles.ChosenImage} src={art.image}></img>
                    <ArtPrompt  art={art}/>
                    <Gallery />
                    
                </div>
            </div>
            <Footer />
            </>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     art && art.user ? loaded() : loading()
    )
}