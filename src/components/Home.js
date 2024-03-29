import './Home.css';
import Cover from './Cover';
import * as ReactDOM from 'react-dom';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';

export function removeElementByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
export function renderElement(parentClass, element) {
    parentClass.render(element);
}
export function getElement(className) {
    const login = ReactDOM.createRoot(document.getElementsByClassName(className)[0]);
    return login;
}
function handleLogIn() {
    removeElementByClass("LogIn");
    const app = getElement("App");
    const cover = <Cover></Cover>;
    renderElement(app, cover);
}
function switchToLogIn() {
    const login = <LogIn></LogIn>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, login);
}

function switchToSignUp() {
    const signup = <SignUp></SignUp>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, signup);
}

export default function Home() {
    return (
    <div className="Home">
        <div className="page">
            <h1 className='wvc'>WHOLE VIBE CATALOG</h1>
            <h2 className='access-to'>access to cools</h2>
            <div className="login">
                <div className="blue-earth">
                    <SignUp></SignUp>
                </div>
            </div>
            <div>
                <h3>Spring 2024</h3>
                <h3>$0</h3>
            </div>
        </div>
    </div>
  );
}