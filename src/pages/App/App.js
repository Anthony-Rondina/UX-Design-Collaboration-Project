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
function App() {
  const [user, setUser] = useState(getUser());
  const [chosenUser, setChosenUser] = useState({})
  const [chosenWork, setChosenWork] = useState({})
  const [toggle, setToggle] = useState(false)
  const [resolvedUser, setResolvedUser]= useState({})
  // const [dummyUser, setDummyUser]= useState({})
  // let contUser = ''

// function testDummyUser(input) {
//   const p = Promise.resolve(input);
//         p.then(value => {
//           setResolvedUser(value);
//           console.log("dummyUser is",dummyUser)
//         }).catch(err => {
//           console.log(err);
//         });
      
// }

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await getUser()
        setUser(currentUser)
        
        // contUser = user ? user : dummyUser
        // console.log("constUser is", contUser)
        console.log("APP.js user is", user)
        // testDummyUser(contUser)
      } catch (err) {
        console.log(err)
      }

    })()
  },[])

  useEffect(()=> {
    user ? localStorage.setItem("userID", user._id) : console.log("no user")
  })

  return (
    <div className="App">
      {user ?
        <Routes>
          <Route path="/" element={<HomePage user={user}/>}/>
          <Route path="/user/:id" element={<UserProfilePage user={user}/>}/>
          <Route path="/art/:id" element={<ProductPage chosenWork={chosenWork} user={user}/>}/>
          <Route path="/user/:id/about" element={<UserAboutMePage toggle={toggle} setToggle={setToggle} user={user}/>}/>
          <Route path="/user/:id/following" element={<UserFollowingListPage user={user}/>}/>
          <Route path="/user/wip/:id" element={<UserWIPPage user={user}/>}/>
          <Route path="/user/chosenart/edt/:id/:userId" element={<UpdateArtPage user={user}/>}/>
          <Route path="/user/:id/artwork" element={<UserProfilePage setToggle={setToggle} toggle={toggle} setChosenWork={setChosenWork} user={user}/>}/>
          <Route path="/user/:id/upload" element={<UserUploadArtPage user={user}/>}/>
          <Route path="/user/edit/:id" element={<EditUserProfilePage toggle={toggle} setToggle={setToggle} user={user}/>}/>
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}
export default App;
