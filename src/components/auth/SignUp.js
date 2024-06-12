import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import LogIn from './LogIn';
import { removeElementByClass, getElement, renderElement } from '../Home';
import Cover from '../Cover';

function switchToLogIn() {
    const login = <LogIn></LogIn>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, login);
}

function showCover() {
    const app = getElement('App');
    const cover = <Cover></Cover>;
    renderElement(app, cover);
}

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                localStorage.setItem('uid', useCredential.user.uid);
                showCover();
            }).catch((error) => {
                if (error.code == 'auth/email-already-in-use') {
                    const messageContainer = getElement('message-container');
                    const message = <div className='message'>
                        User exists. Log in instead.
                    </div>
                    renderElement(messageContainer, message);
                }
                if (error.code == 'auth/invalid-email') {
                    const messageContainer = getElement('message-container');
                    const message = <div className='message'>
                        Invalid email.
                    </div>
                    renderElement(messageContainer, message);
                }
            })
    }

    return (
        <div className='login-or-signup'>
            <h3 className="login-word">Sign Up</h3>
            <form className='signup-login-form' onSubmit={signUp} autoComplete="off">
                <label for="email">EMAIL ADDRESS</label><br></br>
                <input className='login-input' type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>

                <label for="password">PASSWORD</label><br></br>
                <input className='login-input' type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>

                <div className="submit-container">
                    <div className='message-container'></div>
                    <button className="submit" type="submit" onClick={signUp}>SIGN UP</button>
                </div>

                <div className='already-have'>Returning user? <span className='switch-to-login' onClick={switchToLogIn}>Log In</span></div>
            </form>
        </div>
    )
}

export default SignUp;