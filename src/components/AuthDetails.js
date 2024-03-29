import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from '../firebase';
import { getElement, renderElement } from "./Home";
import Home from "./Home";

function getUsernameFromEmail(email) {
    const re = /^[^@]*/;
    return re.exec(email)[0].toUpperCase();
}

function userLogOut() {
    signOut(auth).then(() => {
        console.log('signout successful');
        const app = getElement('App');
        const home = <Home></Home>;
        renderElement(app, home);
    }).catch(error => console.log(error));
}

function AuthDetails({ color }) {
    const [authUser, setAuthUser] = useState(null);
    
    function showLogOut() {
        const usernameLogOutContainer = getElement('username-logout-container');
        const usernameLogOut = <div className="username-logout">
            { authUser ? <div className={`corner-button username ${color}`} onClick={hideLogOut}>{getUsernameFromEmail(authUser.email)}</div> : <></> }
            <div className={`logout-button ${color}`} onClick={userLogOut}>Log Out</div>
        </div>;
        renderElement(usernameLogOutContainer, usernameLogOut);
    }

    function hideLogOut() {
        const usernameLogOutContainer = getElement('username-logout-container');
        const username = <div className="username-logout">
            { authUser ? <div className={`corner-button username ${color}`} onClick={showLogOut}>{getUsernameFromEmail(authUser.email)}</div> : <></> }
        </div>;
        renderElement(usernameLogOutContainer, username);
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    return (
        <div className='username-logout-container'>
            <div className="username-logout">
                { authUser ? <div className={`corner-button username ${color}`} onClick={showLogOut}>{getUsernameFromEmail(authUser.email)}</div> : <></> }
            </div>
        </div>
    )
}

export default AuthDetails;