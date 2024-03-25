import './FunctionPurpose.css';
import {removeElementByClass, renderElement, getElement} from './LogIn';
import Cover from './Cover';
import { handleLogOut, handleIndex } from './Cover';
import * as ReactDOM from 'react-dom';
import Home from './Index';

function handleCover() {
    removeElementByClass("FunctionPurpose");
    const app = getElement("App");
    const cover = <Cover></Cover>;
    renderElement(app, cover);
}

function showMenu() {
    removeElementByClass("menu-subcontainer");
    const menuSubcontainer = <div className='menu-subcontainer'>
        <div className='show-menu black' onClick={hideMenu} title="Hide menu">✦</div>
        <div class="corner-buttons-container black">
            <div className='corner-buttons black'>
                <div className='corner-button black top-left' onClick={handleLogOut}>LOG OUT</div>
                <div className='corner-button black top-right' onClick={handleIndex}>⏺ INDEX</div>
                <div className='corner-button black bottom-left' onClick={handleCover}>◀︎ COVER</div>
                <div className='corner-button black bottom-right' onClick={handleIndex}>INDEX ▶</div>
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

function FunctionPurpose() {
    return (
        <div className="FunctionPurpose">
            <div className="page white">
                <h1 class="black-header">FUNCTION</h1>
                <p class="univers-reg">Your own WHOLE VIBE CATALOG functions as a curation and organization device. With it, the user should know better what is vibey and where and how those vibes come together.</p>
                <p class="univers-reg">An item is listed in the CATALOG if it is deemed:</p>
                <ol class="univers-reg">
                    <li class="univers-reg">Aesthetic as a vibe medium,</li>
                    <li class="univers-reg">Relevant to cultural education,</li>
                    <li class="univers-reg">Low or high in popularity or coolness,</li>
                    <li class="univers-reg">Central to the user's favorite things,</li>
                    <li class="univers-reg">Easily vibed to.</li>
                </ol>
                <p class="univers-reg">This information is continually revised according to the experience of the naturally intelligent CATALOG user.</p><br></br>
                <h1 class="black-header">PURPOSE</h1>
                <p class="univers-reg">We are as gods and might as well get good at it. So far, remotely done power and glory—as via attention-greedy algorithms—has succeeded to the point where humans are followers and gross defects obscure actual gains. In response to this dilemma and to these gains a realm of intimate, personal power is developing—power of the individual to conduct her own education, find her own inspiration, shape her own environment, and share her adventure with whoever is interested. Vibes that aid this process are sought and promoted by your own WHOLE VIBE CATALOG.</p>
            </div>
            <div className='menu-container'>
                <div className='menu-subcontainer'>
                    <div className='show-menu black' onClick={hideMenu} title="Hide menu">✦</div>
                    <div class="corner-buttons-container black">
                        <div className='corner-buttons black'>
                            <div className='corner-button black top-left' onClick={handleLogOut}>LOG OUT</div>
                            <div className='corner-button black top-right' onClick={handleIndex}>⏺ INDEX</div>
                            <div className='corner-button black bottom-left' onClick={handleCover}>◀︎ COVER</div>
                            <div className='corner-button black bottom-right' onClick={handleIndex}>INDEX ▶</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default FunctionPurpose;
