// import UserProfile from "../../components/ProjectPage/UserProfile"
// import ArtPrompt from "../../components/ProjectPage/ArtPrompt"
import Videos from "../../components/ProductPage/Videos"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import styles from "./ProductPage.module.css"
import UserProfile from "../../components/ProductPage/UserProfile"


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
            <div>
                {console.log("now art is",art)}
            <UserProfile art={art} />
            <img className={styles.ChosenImage} src={art.image} alt=''></img>
            {/* <ArtPrompt /> */}
            <Videos />
        </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }
    return (
     art && art.user ? loaded() : loading()
    )
}