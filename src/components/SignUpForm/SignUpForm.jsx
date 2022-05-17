import styles from './SignUpForm.module.css';
import { Component } from "react";
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
};

handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value, error: '' })
}

handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // keeps the previous values of the state from line 4
        const formData = { ...this.state };
        console.log('formdata is', formData)
        // removes the error and confirm from the newly made formData ojbect
        delete formData.error;
        console.log('pass1')
        delete formData.confirm;
        console.log('pass2')
        const user = await signUp(formData)
        console.log('user is now', user)
        this.props.setUser(user)
        console.log('setUser successful!')
        localStorage.setItem('token', user)
        console.log('setitem to local storage!')
    } catch (err) {
        this.setState({ error: "Sign up failed" })
    }
    // event.preventDefault();
    // alert(JSON.stringify(this.state));
}

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div className={styles.SignUpForm}>
      <div className={styles.FormContainer}>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="username" value={this.state.name} onChange={this.handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}
}