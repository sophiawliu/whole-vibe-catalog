import './LogIn.css';
import Cover from './Cover';
import * as ReactDOM from 'react-dom';

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
    const login = <div className='login-or-signup'>
        <h3 className="login-word">Log In</h3>
        <form>
            <label for="email">EMAIL ADDRESS</label><br></br>
            <input type="email" id="email" name="email"></input><br></br>
            <label for="password">PASSWORD</label><br></br>
            <input type="password" id="password" name="password"></input><br></br>
            <div className="submit-container">
                <input className="submit" type="submit" value="LOG IN" onClick={handleLogIn}></input>
            </div>
            <div className='already-have'>New user? <span className='switch-to-login' onClick={switchToSignUp}>Sign Up</span></div>
        </form>
    </div>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, login);
}

function switchToSignUp() {
    const signup = <div className='login-or-signup'>
        <h3 className="login-word">Sign Up</h3>
        <form>
            <label for="email">EMAIL ADDRESS</label><br></br>
            <input type="email" id="email" name="email"></input><br></br>
            <label for="password">PASSWORD</label><br></br>
            <input type="password" id="password" name="password"></input><br></br>
            <div className="submit-container">
                <input className="submit" type="submit" value="SIGN UP" onClick={handleLogIn}></input>
            </div>
            <div className='already-have'>Returning user? <span className='switch-to-login' onClick={switchToLogIn}>Log In</span></div>
        </form>
    </div>
    removeElementByClass('login-or-signup');
    const blueEarth = getElement('blue-earth');
    renderElement(blueEarth, signup);
}

export default function LogIn() {
    return (
    <div className="LogIn">
        <div className="page">
            <h1 className='wvc'>WHOLE VIBE CATALOG</h1>
            <h2 className='access-to'>access to cools</h2>
            <div className="login">
                <div className="blue-earth">
                    <div className='login-or-signup'>
                        <h3 className="login-word">Log In</h3>
                        <form>
                            <label for="email">EMAIL ADDRESS</label><br></br>
                            <input type="email" id="email" name="email"></input><br></br>
                            <label for="password">PASSWORD</label><br></br>
                            <input type="password" id="password" name="password"></input><br></br>
                            <div className="submit-container">
                                <input className="submit" type="submit" value="LOG IN" onClick={handleLogIn}></input>
                            </div>
                            <div className='already-have'>New user? <span className='switch-to-login' onClick={switchToSignUp}>Sign Up</span></div>
                        </form>
                    </div>
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