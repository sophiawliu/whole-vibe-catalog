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
function LogIn() {
    return (
    <div className="LogIn">
        <div className="page">
            <h1 className='wvc'>WHOLE VIBE CATALOG</h1>
            <h2>access to cools</h2>
            <div className="login">
                <div className="blue-earth">
                    <h3 className="login-word">Log In</h3>
                    <form>
                        <label for="username">USERNAME</label><br></br>
                        <input type="text" id="username" name="username"></input><br></br>
                        <label for="password">PASSWORD</label><br></br>
                        <input type="password" id="password" name="password"></input><br></br>
                        <div className="submit-container">
                            <input className="submit" type="submit" value="LOG IN" onClick={handleLogIn}></input>
                        </div>
                    </form>
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

export default LogIn;
