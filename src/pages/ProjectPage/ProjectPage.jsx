import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export default function ProductPage({chosenWork}) {
    const id = useParams()
    const [art,setArt]= useState({})
    const [refresh, setRefresh] = useState(false)
    // const getData = (input,inpu2) => {
    //     (async () => {
    //         try {
    //             const response = await axios.get(`/api/art/${input}`)
    //             console.log("response is",response)
    //             setArt(response.data)
    //             // console.log("updated user is",response.data)
    //             if (response.status === 200) {
    //                 setRefresh(!refresh)
    //             } else {
    //                 console.log('Something went wrong')
    //             }

    //         } catch (err) {
    //             console.log(err)
    //             // console.log(`cards is ${cards}`)
    //         }
    //     })()
    // }

    useEffect(() => {
        console.log(chosenWork)
    },[])
    return(
        <>
        <h1>{chosenWork.nameOfArt}</h1>
        <img src={chosenWork.image} alt="" />
        </>
    )
}