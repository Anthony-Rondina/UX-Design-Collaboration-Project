import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');


return (
  <div>
    <div className="form-container">
      <form autoComplete="off" onSubmit=''>
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange='' required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange='' required />
        <button type="submit">Login</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}