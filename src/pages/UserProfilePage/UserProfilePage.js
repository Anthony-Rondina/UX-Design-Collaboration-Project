
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import DisplayContent from "../../components/UserProfilePage/DisplayContent"
import ListBar from "../../components/UserProfilePage/ListBar"
export default function UserProfilePage() {
const [refresh, setRefresh] = useState(false)
const [artwork, setArtWork] = useState(true)
const [WIP, setWIP] = useState(false)
const [following, setFollowing] = useState(false)
const [about, setAbout] = useState(false)
const [displayContent, setDisplayContent] = useState([])

useEffect(() => {
// make a backend call to get a filtered search result based on the option picked from 
}, [refresh])

//This function will help change the background color of the selected li
// const choice = async (input) => {
//     const data = ''
//     switch (input) {
//         case art :
//             setArtWork(true)
//             setWIP(false)
//             setFollowing(false)
//             setAbout(false)
//             data = "await axios.get(`/api/cards/`)"
//             setDisplayContent(data)
//             setRefresh(!refresh)
//             break;
//         case inProgress: 
//             setWIP(true)
//             setArtWork(false)
//             setFollowing(false)
//             setAbout(false)
//             data = "await axios.get(`/api/cards/`)"
//             setDisplayContent(data)
//             setRefresh(!refresh)
//             break;
//         case follow: 
//             setFollowing(true)
//             setArtWork(false)
//             setWIP(false)
//             setAbout(false)
//             data = "await axios.get(`/api/cards/`)"
//             setDisplayContent(data)
//             setRefresh(!refresh)
//             break;
//         case aboutMe: 
//             setAbout(true)
//             setArtWork(false)
//             setFollowing(false)
//             setWIP(false)
//             data = "await axios.get(`/api/cards/`)"
//             setDisplayContent(data)
//             setRefresh(!refresh)
//             break;
//     }
// }

    return (
        <div>
            <div className="userInfo">
                {/* Change User.avatar to actual props once implimented */}
                <img src="user.avatar" alt="" />
                <div className="userUpperOptions">
                    <div className="welcome">
                        {/* replace NAME with user.name once implimented */}
                        <span className="welcomeUser">{`Hello NAME.`}</span>  
                        {/* replace CANVAS with user.type once implimented */}
                        <span className="type">{`CANVAS.`}</span>  
                    </div>
                </div>
                <div className="userBottomOptions">
                    <Link to="/"><button>Edit Profile</button></Link>
                    {/* This button will toggle a modal for additional options */}
                    <button className="userMore">...</button>
                </div>
            </div>
            <div className="mainContent">
                {/* position userSortOptions to the left */}
                <ListBar about={about} WIP={WIP} artwork={artwork} following={following} />
                {/* The following div will make a call to the backend to populate and map over the data from the selected option in the li above */}
                <DisplayContent about={about} WIP={WIP} artwork={artwork} following={following} />
            </div>
        </div>
    )
}