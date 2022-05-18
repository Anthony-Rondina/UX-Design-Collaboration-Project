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
  const [showH5, setShowH5] = useState(true);
  const [showH1, setShowH1] = useState(true);
  const [showP, setShowP] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3>where artists inspire and motivate each other!</h3>
      </div>
      <div className={styles.SplitSide}>
          <h1 onChange={() => setShowH1(!showLogin)}> {showLogin ? 'Sign in' : 'Create an account'}</h1>
          <h5 onChange={() => setShowH5(!showLogin)}> {showLogin ? 'New user?' : 'Already have an account?'}<span onClick={() => setShowLogin(!showLogin)}> {showLogin ? 'Create an account' : 'Sign In'}</span></h5>
          <p onChange={() => setShowP(!showLogin)}>{showLogin ? 'Sign up with social' : 'Sign in with social'}</p>
          <a href='https://facebook.com' target='_blank'><img className={styles.mediaIcon1} alt='social-logo' src={fb}/></a>
          <a href='https://accounts.google.com/' target='_blank'><img className={styles.mediaIcon2} alt='social-logo' src={goog}/></a>
          <a href='https://apple.com' target='_blank'><img className={styles.mediaIcon3} alt='social-logo' src={apple}/></a>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}