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
        <div className='corner-button white bottom-left' onClick={handleFunctionPurpose}>◀︎ F / P</div>
        <div className='corner-button black bottom-right'></div>
        <div className='edit-black-index' onClick={openEdit} title="Upload new cool">
            <div className='plus'>+</div>
        </div>
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
                <h1 className='page-title'>Index</h1>
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
                    <div className='corner-button white bottom-left' onClick={handleFunctionPurpose}>◀︎ F / P</div>
                    <div className='corner-button black bottom-right'></div>
                    
                    
                    <Popup trigger=
                        {<div className='edit-black-index' title="Upload new cool">
                            <div className='plus'>+</div>
                        </div>} 
                        modal nested>
                        {
                            close => (
                                <div className='modal'>
                                    <div className="Edit">
                                                <form className='upload-form'>
                                                    <h1 className='upload-new-cool'>Upload New Cool</h1>
                                                    <div className='inputs'>
                                                        <form className='upload-new-cool'>
                                                            <div className='input-section'>
                                                                <label className='upload-new-label' for="upload-image">UPLOAD IMAGE</label>
                                                                <input className='upload-new-input' id='upload-image' name='upload-image' type='file'></input>
                                                            </div>
                                                            <div className='input-section'>
                                                                <label className='upload-new-label' for="vibe-dropdown">VIBE</label>
                                                                <select id='vibe-dropdown' name='vibe-dropdown'>
                                                                    <option value='eighties'>'80s On The Water</option>
                                                                    <option value='crybaby'>Crybaby Greaser</option>
                                                                    <option value='womyns'>Womyn's Folk</option>
                                                                    <option value='austin'>Austin Powers x '60s Mod</option>
                                                                    <option value='pc'>PC Revolution</option>
                                                                    <option value='cowboy'>Cowboy Western</option>
                                                                </select>
                                                            </div>
                                                            <div className='input-section'>
                                                                <label className='upload-new-label' for="cool-description">DESCRIPTION</label>
                                                                <textarea className='upload-new-input' id='cool-description' name='cool-description' rows={3}></textarea>
                                                            </div>
                                                            <div className='input-section'>
                                                                <label className='upload-new-label' for="cool-description">TAGS</label>
                                                                {/* tagify later */}
                                                                <input className='upload-new-input' name='tags'></input>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <button className='upload-button' type='submit'>UPLOAD</button>
                                                    <div className='close' onClick={() => close()}>Close</div>
                                                </form>
                                        </div>
                                </div>
                            )
                        }
                    </Popup>

                </div>
            </div>
        </div>
  );
}

export default Index;