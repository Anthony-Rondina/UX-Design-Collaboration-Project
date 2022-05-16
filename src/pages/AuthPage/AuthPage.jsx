import { useState } from 'react';
import styles from './AuthPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import fb from '../../public/social-logos/Facebook.png';
import goog from '../../public/social-logos/google.png';
import apple from '../../public/social-logos/apple.png';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3>where artists inspire and motivate each other!</h3>
      </div>
      <div className={styles.SplitSide}>
          <h1>Create an account</h1>
          <h5>Already have an account?<span onClick={() => setShowLogin(!showLogin)}> {showLogin ? 'Sign Up' : 'Sign In'}</span></h5>
          <p>Sign up with social</p>
          <img className={styles.mediaIcon} alt='social-logo' src={fb}/>
          <img className={styles.mediaIcon} alt='social-logo' src={goog}/>
          <img className={styles.mediaIcon} alt='social-logo' src={apple}/>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}