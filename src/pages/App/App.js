import './App.css';
import { Route, Routes } from 'react-router-dom'
import UserProfilePage from "../UserProfilePage/UserProfilePage"
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Homepage/>}/> */}
        <Route path="/user/:id" element={<UserProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
