import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from '../firebase';
import { getElement, renderElement } from "./Home";

function getUsernameFromEmail(email) {
    const re = /^[^@]*/;
    return re.exec(email)[0].toUpperCase();
}

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);
    
    function showLogOut() {
        const usernameLogOutContainer = getElement('username-logout-container');
        const usernameLogOut = <div className="corner-button top-left">
            { authUser ? <div className="username" onClick={hideLogOut}>{getUsernameFromEmail(authUser.email)}</div> : <></> }
            <div className='logout-button'>Log Out</div>
        </div>;
        renderElement(usernameLogOutContainer, usernameLogOut);
    }

    function hideLogOut() {
        const usernameLogOutContainer = getElement('username-logout-container');
        const username = <div className="corner-button top-left">
            { authUser ? <div className="username" onClick={showLogOut}>{getUsernameFromEmail(authUser.email)}</div> : <></> }
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
        })
    }, [])
    return (
        <div className='username-logout-container'>
            <div className="username-logout">
                { authUser ? <div className="corner-button top-left" onClick={showLogOut}>{getUsernameFromEmail(authUser.email)}</div> : <></> }
            </div>
        </div>
    )
}

export default AuthDetails;