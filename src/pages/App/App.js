import './App.css';
// import AuthPage from "../AuthPage/AuthPage"
import { Route, Routes } from 'react-router-dom'
import UserProfilePage from "../UserProfilePage/UserProfilePage"
import HomePage from "../Homepage/Homepage"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/login" element={<AuthPage/>}/> */}
        <Route path="/user/:id" element={<UserProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
