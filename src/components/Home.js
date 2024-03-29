import './Home.css';
import * as ReactDOM from 'react-dom';
import SignUp from './auth/SignUp';

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