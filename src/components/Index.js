import './Index.css';
import {removeElementByClass, renderElement, getElement} from './LogIn';
import { handleLogOut, handleIndex, openEdit } from './Cover';
import * as ReactDOM from 'react-dom';
import FunctionPurpose from './FunctionPurpose';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Edit from './Edit';

function handleNext() {
    removeElementByClass("FunctionPurpose");
}

function handleFunctionPurpose() {
    removeElementByClass("Index");
    const app = getElement("App");
    const funcPurp = <FunctionPurpose></FunctionPurpose>;
    renderElement(app, funcPurp);
}

function showMenu() {
    removeElementByClass("menu-subcontainer");
    const menuSubcontainer = <div className='menu-subcontainer'>
        <div className='show-menu black' onClick={hideMenu} title="Hide menu">✦</div>
        <div className='corner-button black top-left' onClick={handleLogOut}>LOG OUT</div>
        <div className='corner-button black top-right' onClick={handleIndex}>⏺ INDEX</div>
        <div className='corner-button white bottom-left' onClick={handleFunctionPurpose}></div>
        <div className='corner-button white bottom-right' onClick={handleFunctionPurpose}>←</div>
        <Edit></Edit>
    </div>
    const menuContainer = getElement("menu-container-index");
    renderElement(menuContainer, menuSubcontainer);
}

function hideMenu() {
    removeElementByClass("show-menu");
    const menuSubcontainer = <div className='menu-subcontainer'>
        <div className='show-menu black' onClick={showMenu} title="Show menu">✧</div>
    </div>;
    const menuContainer = getElement("menu-container-index");
    renderElement(menuContainer, menuSubcontainer);
}
function Index() {
    return (
        <div className="Index">
            <div className='index-page'>
                <h1 className='page-title'>INDEX</h1>
                <div className='vibe-bar'>
                    <div className='vibe-title'>'80s On The Water</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Crybaby Greaser</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Womyn's Folk</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Austin Powers x '60s Mod</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>PC Revolution</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Cowboy Western</div>
                </div>
            </div>
                
            <div className='menu-container-index'>
                <div className='menu-subcontainer'>
                    <div className='show-menu black' onClick={hideMenu} title="Hide menu">✦</div>
                    <div className='corner-button black top-left' onClick={handleLogOut}>LOG OUT</div>
                    <div className='corner-button black top-right' onClick={handleIndex}>⏺ INDEX</div>
                    <div className='corner-button white bottom-left' onClick={handleFunctionPurpose}></div>
                    <div className='corner-button white bottom-right' onClick={handleFunctionPurpose}>←</div>
                    <Edit></Edit>
                </div>
            </div>
        </div>
  );
}

export default Index;