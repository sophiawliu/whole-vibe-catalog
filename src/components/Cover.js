import './Cover.css';
import {removeElementByClass, renderElement, getElement} from './Home';
import LogIn from './Home';
import FunctionPurpose from './FunctionPurpose';
import * as ReactDOM from 'react-dom';
import Index from './Index';
import Edit from './Edit';
import AuthDetails from './AuthDetails';

function handleEnter() {
    removeElementByClass("Cover");
    const app = getElement("App");
    const funcPurp = <FunctionPurpose></FunctionPurpose>;
    renderElement(app, funcPurp);
}

export function handleLogOut() {
    removeElementByClass("Cover");
    const app = getElement("App");
    const logIn = <LogIn></LogIn>;
    renderElement(app, logIn);
}

function showMenu() {
    removeElementByClass("menu-subcontainer");
    const menuSubcontainer = <div className='menu-subcontainer'>
        <div className='show-menu' onClick={hideMenu} title="Hide menu">✦</div>
        <div class="corner-buttons-container">
            <div className='corner-buttons'>
                <AuthDetails></AuthDetails>
                <div className='corner-button top-right' onClick={handleIndex}>⏺ INDEX</div>
                <div className='corner-button bottom-left'onClick={handleEnter}>→</div>
                <div className='corner-button bottom-right'></div>
            </div>
        </div>
        <Edit></Edit>
    </div>
    const menuContainer = getElement("menu-container");
    renderElement(menuContainer, menuSubcontainer);
}

function hideMenu() {
    removeElementByClass("show-menu");
    const menuSubcontainer = <div className='menu-subcontainer'>
            <div className='show-menu' onClick={showMenu} title="Show menu">✧</div>
    </div>;
    const menuContainer = getElement("menu-container");
    renderElement(menuContainer, menuSubcontainer);
}

export function handleIndex() {
    const app = getElement("App");
    const index = <Index></Index>;
    renderElement(app, index);
}

export function openEdit() {
    const app = getElement("App");
    const edit = <Edit></Edit>;
    renderElement(app, edit);
}

function Cover() {
    return (
    <div className="Cover">
        <div className="page">
        <h1 className='wvc'>WHOLE VIBE CATALOG</h1>
            <h2 className='access-to'>access to cools</h2>
            <div className="login">
                <div className="earth"></div>
            </div>
            <div>
                <h3>Spring 2024</h3>
                <h3>$0</h3>
            </div>
        </div>
        <div className='menu-container'>
            <div className='menu-subcontainer'>
                <div className='show-menu' onClick={hideMenu} title="Hide menu">✦</div>
                <div class="corner-buttons-container">
                    <div className='corner-buttons'>
                        <AuthDetails></AuthDetails>
                        <div className='corner-button top-right' onClick={handleIndex}>⏺ INDEX</div>
                        <div className='corner-button bottom-left'onClick={handleEnter}>→</div>
                        <div className='corner-button bottom-right'></div>
                    </div>
                </div>
                <Edit></Edit>
            </div>
        </div>
    </div>
  );
}

export default Cover;
