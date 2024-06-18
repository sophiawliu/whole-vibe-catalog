import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from '../../firebase';
import { getElement, renderElement } from "../Home";
import Home from "../Home";

function getUsernameFromEmail(email) {
    const re = /^[^@]*/;
    return re.exec(email)[0];
}

function Username() {
    const [authUser, setAuthUser] = useState(null);
    const email = localStorage.getItem('email');

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
        <>
            <h3 className="belongs-to">This catalog belongs to:</h3>
            <h3>{getUsernameFromEmail(email)}</h3>
        </>
    )
}

export default Username;