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
    event.preventDefault();
}

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className={styles.formContainer1}>
              <p>- or -</p>
          <h4>Sign up with email</h4>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input type='email' name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} required />
          <input type="text" name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange} required />
          {/* <input className={styles.name} type="firstName" name="firstName" value={this.state.firstName} placeholder='First Name' onChange={this.handleChange} required />
          <input className={styles.name2} type="lastName" name="lastName" value={this.state.lastName} placeholder='Last Name' onChange={this.handleChange} required /> */}
          <input className={styles.pass} type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange} required />
          <input className={styles.confirm} type="password" name="confirm" value={this.state.confirm} placeholder='Confirm Password' onChange={this.handleChange} required />
          <input className={styles.checkbox} type='checkbox'/>
          <button type="submit" disabled={disable}>Sign Up</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}
}