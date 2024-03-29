import React from "react";
import { removeElementByClass, getElement, renderElement } from "./Home";
import AuthDetails from "./AuthDetails";
import Index from "./Index";
import './Menu.css'
import BottomMenu from "./BottomMenu";

export default function TopMenu({ prevPage, nextPage, arrowColor, topMenuColor }) {
    function handlePage(page) {
        return () => {
            const app = getElement("App");
            renderElement(app, page);
        }
    }

    function showMenu() {
        const topMenuContainer = getElement('top-menu-container');
        const topMenu = <TopMenu topMenuColor={topMenuColor} prevPage={prevPage} nextPage={nextPage} arrowColor={arrowColor}></TopMenu>;
        renderElement(topMenuContainer, topMenu);
        const bottomMenuContainer = getElement('bottom-menu-container');
        const bottomMenu = <BottomMenu prevPage={prevPage} nextPage={nextPage} arrowColor={arrowColor}></BottomMenu>;
        renderElement(bottomMenuContainer, bottomMenu);
    }

    function hideMenu() {
        removeElementByClass('top-menu');
        removeElementByClass('bottom-menu');
        const topMenuContainer = getElement('top-menu-container');
        const showMenuDiv = <div className={`show-menu ${topMenuColor}`} onClick={showMenu} title="Show menu">✧</div>;
        renderElement(topMenuContainer, showMenuDiv);
    }

    return (
        <div className='top-menu'>
            <AuthDetails color={topMenuColor}></AuthDetails>
            <div className={`show-menu ${topMenuColor}`} onClick={hideMenu} title="Hide menu">✦</div>
            <div className={`corner-button index ${topMenuColor}`} onClick={handlePage(<Index></Index>)}>⏺ VIBES</div>
        </div>
    )
}