import './Cover.css';
import {removeElementByClass, renderElement, getElement} from './LogIn';
import LogIn from './LogIn';
import FunctionPurpose from './FunctionPurpose';
import * as ReactDOM from 'react-dom';
import Index from './Index';

export function handleLogOut() {
    removeElementByClass("Cover");
    const app = getElement("App");
    const logIn = <LogIn></LogIn>;
    renderElement(app, logIn);
}

function showMenu() {
    removeElementByClass("menu-subcontainer");
    const menuSubcontainer = <div className='menu-subcontainer'>

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
    removeElementByClass("FunctionPurpose");
    const app = getElement("App");
    const index = <Index></Index>;
    renderElement(app, index);
}

function Edit() {
    return (
    <div className="Edit">
        <div className="page">

        </div>
    </div>
  );
}

export default Edit;
