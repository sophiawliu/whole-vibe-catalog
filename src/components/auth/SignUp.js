import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import LogIn from './LogIn';
import { removeElementByClass, getElement, renderElement } from '../Home';

function switchToLogIn() {
    const login = <LogIn></LogIn>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, login);
}

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                console.log(useCredential)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='login-or-signup'>
            <h3 className="login-word">Sign Up</h3>
            <form className='signup-login-form' onSubmit={signUp}>
                <label for="email">EMAIL ADDRESS</label><br></br>
                <input className='login-input' type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>

                <label for="password">PASSWORD</label><br></br>
                <input className='login-input' type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>

                <div className="submit-container">
                    <button className="submit" type="submit" onClick={signUp}>SIGN UP</button>
                </div>

                <div className='already-have'>Returning user? <span className='switch-to-login' onClick={switchToLogIn}>Log In</span></div>
            </form>
        </div>
    )
}

export default SignUp;