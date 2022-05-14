import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3>where artists inspire and motivate each other!</h3>
      </div>
      <div>
          <h1>Create an account</h1>
          <h5>Already have an account?<span onClick={() => setShowLogin(!showLogin)}> {showLogin ? 'Sign Up' : 'Sign In'}</span></h5>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}