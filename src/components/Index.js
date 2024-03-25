import './Index.css';
import {removeElementByClass, renderElement, getElement} from './LogIn';
import { handleLogOut, handleIndex } from './Cover';
import * as ReactDOM from 'react-dom';
import FunctionPurpose from './FunctionPurpose';

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
        <div class="corner-buttons-container black">
            <div className='corner-buttons black'>
                <div className='corner-button black top-left' onClick={handleLogOut}>LOG OUT</div>
                <div className='corner-button black top-right' onClick={handleIndex}>⏺ INDEX</div>
                <div className='corner-button black bottom-left' onClick={handleFunctionPurpose}>◀︎ FUNCTION/PURPOSE</div>
                <div className='corner-button black bottom-right'></div>
            </div>
        </div>
    </div>
    const menuContainer = getElement("menu-container");
    renderElement(menuContainer, menuSubcontainer);
}

function hideMenu() {
    removeElementByClass("show-menu");
    const menuSubcontainer = <div className='menu-subcontainer'>
        <div className='show-menu black' onClick={showMenu} title="Show menu">✧</div>
    </div>;
    const menuContainer = getElement("menu-container");
    renderElement(menuContainer, menuSubcontainer);
}
function Index() {
    return (
        <div className="Index">
            <div className="page white">

            </div>     
            <div className='menu-container'>
                <div className='menu-subcontainer'>
                    <div className='show-menu black' onClick={hideMenu} title="Hide menu">✦</div>
                    <div class="corner-buttons-container black">
                        <div className='corner-buttons black'>
                            <div className='corner-button black top-left' onClick={handleLogOut}>LOG OUT</div>
                            <div className='corner-button black top-right' onClick={handleIndex}>⏺ INDEX</div>
                            <div className='corner-button black bottom-left' onClick={handleFunctionPurpose}>◀︎ FUNCTION/PURPOSE</div>
                            <div className='corner-button black bottom-right'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Index;