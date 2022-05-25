import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.css';

export default function LoginForm({ toggle, setToggle,setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials); 
      setUser(user); 
      window.location.reload(false);
      console.log("toggle switched on login")
    } catch {
      setError('Log In Failed - Try Again');
    }
  }


return (
  <div>
    <div className={styles.formContainer2}>
            <p>- or -</p>
          <h4>Sign in with email</h4>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="email" value={credentials.email} placeholder='Email' onChange={handleChange} required />
        <input type="password" name="password" value={credentials.password} placeholder='Password' onChange={handleChange} required />
        <div className={styles.forgotDiv}><a href='#'><span className={styles.forgot}>Forgot Password?</span></a></div>
        <button type="submit">Login</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}