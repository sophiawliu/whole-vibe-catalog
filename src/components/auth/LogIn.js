import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import SignUp from './SignUp';
import { removeElementByClass, getElement, renderElement } from '../Home';
import Cover from '../Cover';

function switchToSignUp() {
    const signup = <SignUp></SignUp>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, signup);
}

function showCover() {
    const app = getElement('App');
    const cover = <Cover></Cover>;
    renderElement(app, cover);
}

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                localStorage.setItem('uid', useCredential.user.uid);
                showCover();
                localStorage.setItem('email', useCredential.user.email);
            }).catch((error) => {
                if (error.code == 'auth/invalid-credential') {
                    const messageContainer = getElement('message-container');
                    const message = <div className='message'>
                        Wrong email or password.
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
            <h3 className="login-word">Log In</h3>
            <form className='signup-login-form' onSubmit={logIn} autoComplete="off">
                <label for="email">EMAIL ADDRESS</label><br></br>
                <input className='login-input' type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>

                <label for="password">PASSWORD</label><br></br>
                <input className='login-input' type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>

                <div className="submit-container">
                    <div className='message-container'></div>
                    <button className="submit" type="submit" onClick={logIn}>LOG IN</button>
                </div>

                <div className='already-have'>New user? <span className='switch-to-login' onClick={switchToSignUp}>Sign Up</span></div>
            </form>
        </div>
    )
}

export default LogIn;