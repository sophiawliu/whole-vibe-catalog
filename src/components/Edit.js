import './Edit.css';
import {removeElementByClass, renderElement, getElement} from './LogIn';
import LogIn from './LogIn';
import FunctionPurpose from './FunctionPurpose';
import * as ReactDOM from 'react-dom';
import Index from './Index';
import Popup from 'reactjs-popup';

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

function closeEdit() {

}

function Edit() {
    return (

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

    // <div className="Edit">
    //     <div className='index-page-center'>
    //         <form className='upload-form'>
    //             <h1 className='upload-new-cool'>Upload New Cool</h1>
    //             {/* <div className='x-button' onClick={closeEdit}>
    //                 <div className='x'>x</div>
    //             </div> */}
    //             <div className='inputs'>
    //                 <form className='upload-new-cool'>
    //                     <div className='input-section'>
    //                         <label className='upload-new-label' for="upload-image">UPLOAD IMAGE</label>
    //                         <input className='upload-new-input' id='upload-image' name='upload-image' type='file'></input>
    //                     </div>
    //                     <div className='input-section'>
    //                         <label className='upload-new-label' for="vibe-dropdown">VIBE</label>
    //                         <select id='vibe-dropdown' name='vibe-dropdown'>
    //                             <option value='eighties'>'80s On The Water</option>
    //                             <option value='crybaby'>Crybaby Greaser</option>
    //                             <option value='womyns'>Womyn's Folk</option>
    //                             <option value='austin'>Austin Powers x '60s Mod</option>
    //                             <option value='pc'>PC Revolution</option>
    //                             <option value='cowboy'>Cowboy Western</option>
    //                         </select>
    //                     </div>
    //                     <div className='input-section'>
    //                         <label className='upload-new-label' for="cool-description">DESCRIPTION</label>
    //                         <textarea className='upload-new-input' id='cool-description' name='cool-description' rows={3}></textarea>
    //                     </div>
    //                     <div className='input-section'>
    //                         <label className='upload-new-label' for="cool-description">TAGS</label>
    //                         {/* tagify later */}
    //                         <input className='upload-new-input' name='tags'></input>
    //                     </div>
    //                 </form>
    //             </div>
    //             <button className='upload-button' type='submit'>UPLOAD</button>
    //             <div className='close' onClick={closeEdit}>Close</div>
    //         </form>
    //     </div>
    // </div>
  );
}

export default Edit;