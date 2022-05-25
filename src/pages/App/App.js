import './App.css';
import AuthPage from "../AuthPage/AuthPage"
import { Route, Routes } from 'react-router-dom'
import UserProfilePage from "../UserProfilePage/UserProfilePage"
import { useState, useEffect } from 'react';
import HomePage from "../Homepage/Homepage"
import UserUploadArtPage from '../UserUploadArtPage/UserUploadArtPage';
import { getUser } from '../../utilities/users-service';
import UserWIPPage from '../UserProfilePage/UserWIPPage';
import UserFollowingListPage from "../UserProfilePage/UserFollowingListPage"
import UserAboutMePage from "../UserProfilePage/UserAboutMePage"
import ProductPage from '../ProductPage/ProductPage';
import NavHeader from '../../components/NavHeader/NavHeader';
import EditUserProfilePage from '../EditUserProfilePage/EditUserProfilePage';
import UpdateArtPage from '../UpdateArtPage/UpdateArtPage';
import axios from 'axios';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
function App() {
  const [user, setUser] = useState(getUser());
  const [chosenUser, setChosenUser] = useState({})
  const [chosenWork, setChosenWork] = useState({})
  const [toggle, setToggle] = useState(false)
  const [resolvedUser, setResolvedUser]= useState({})
  const [loggedInUser, setLoggedInUser] = useState({})
  let userId = localStorage.getItem("userID")

const getLoggedInUser = (input) => {
  (async () => {
      try {
          // console.log(id)
          const response = await axios.get(`/api/users/${input}`)
          // console.log("response is",response)
          setLoggedInUser(response.data)
          // console.log("updated user is",updatedUser)
          if (response.status === 200) {

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
    (async () => {
      try {
        const currentUser = await getUser()
        setUser(currentUser)
        // contUser = user ? user : dummyUser
        // console.log("constUser is", contUser)
        getLoggedInUser(userId)
        // testDummyUser(contUser)
      } catch (err) {
        console.log(err)
      }

    })()
  },[toggle])

  useEffect(()=> {
    user ? localStorage.setItem("userID", user._id) : console.log("no user")
  })

  return (
    <div className="App">
      {user ?
        <Routes>
          <Route path="/" element={<HomePage user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/user/:id" element={<UserProfilePage user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/art/:id" element={<ProductPage chosenWork={chosenWork} user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/user/:id/about" element={<UserAboutMePage toggle={toggle} setToggle={setToggle} user={user} setUser={setUser}/>}/>
          <Route path="/user/:id/following" element={<UserFollowingListPage user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/user/wip/:id" element={<UserWIPPage user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/user/chosenart/edt/:id/:userId" element={<UpdateArtPage user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/user/:id/artwork" element={<UserProfilePage setToggle={setToggle} toggle={toggle} setChosenWork={setChosenWork} user={user} setUser={setUser}/>}/>
          <Route path="/user/:id/upload" element={<UserUploadArtPage user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>}/>
          <Route path="/user/edit/:id" element={<EditUserProfilePage toggle={toggle} setToggle={setToggle} user={user} setUser={setUser}/>}/>
          <Route path="/user/about" element={<AboutUsPage toggle={toggle} setToggle={setToggle} user={user} setUser={setUser}/>}/>
        </Routes>
        :
        <AuthPage toggle={toggle} setToggle={setToggle} setUser={setUser} />
      }
    </div>
  );
}
export default App;
