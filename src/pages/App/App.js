import './App.css';
import AuthPage from "../AuthPage/AuthPage"
import { Route, Routes } from 'react-router-dom'
import UserProfilePage from "../UserProfilePage/UserProfilePage"
import { useState, useEffect } from 'react';
import HomePage from "../Homepage/Homepage"
import { getUser } from '../../utilities/users-service';
function App() {
  const [user, setUser] = useState(getUser());
  
  useEffect(() => {
    (async () => {
      try {
        const currentUser = await getUser()
        setUser(currentUser)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])
  
  return (

    <div className="App">
      {user ? //ADMIN users can access everything
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/user/:id" element={<UserProfilePage/>}/>
        </Routes>
        :
        <AuthPage setUser={setUser}/>
  }
      
    </div>
  );
}

export default App;
