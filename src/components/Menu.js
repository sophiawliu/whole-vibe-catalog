import React from "react";
import { removeElementByClass, getElement, renderElement } from "./Home";
import AuthDetails from "./AuthDetails";
import Edit from "./Edit";
import Index from "./Index";
import './Menu.css'

export default function Menu({ prevPage, nextPage, arrowColor, topMenuColor }) {
    
    function handlePage(page) {
        return () => {
            const app = getElement("App");
            renderElement(app, page);
        }
    }

    const arrowClass = `arrow ${arrowColor}`;

    function leftArrowButton(page) {
        if (page) {
            return (
                <button className={arrowClass} onClick={handlePage(page)}>
                    ←
                </button>
            )
        } else {
            return (
                <button className={`${arrowClass} disabled`}>
                    ←
                </button>
            )
        }
    }
    function rightArrowButton(page) {
        if (page) {
            return (
                <button className={arrowClass} onClick={handlePage(page)}>
                    →
                </button>
            )
        } else {
            return (
                <button className={`${arrowClass} disabled`} disabled>
                    →
                </button>
            )
        }
    }

    function showMenu() {
        const menuSubcontainer = <Menu prevPage={prevPage} nextPage={nextPage} arrowColor={arrowColor} topMenuColor={topMenuColor}></Menu>;
        const menuContainer = getElement("menu-subcontainer");
        renderElement(menuContainer, menuSubcontainer);
    }

    function hideMenu() {
        removeElementByClass("show-menu");
        const menuSubcontainer = <div className={`show-menu ${topMenuColor}`} onClick={showMenu} title="Show menu">✧</div>;
        const menuContainer = getElement("menu-subcontainer");
        renderElement(menuContainer, menuSubcontainer);
    }

    return (
        <div className='menu-subcontainer'>
            <div className={`show-menu ${topMenuColor}`} onClick={hideMenu} title="Hide menu">✦</div>
            <div className="corner-buttons-container">
                <div className='corner-buttons'>
                    <AuthDetails color={topMenuColor}></AuthDetails>
                    <div className={`corner-button index ${topMenuColor}`} onClick={handlePage(<Index></Index>)}>⏺ INDEX</div>
                    <div className="arrows-container">
                        {leftArrowButton(prevPage)}
                        {rightArrowButton(nextPage)}
                    </div>
                </div>
            </div>
            <Edit></Edit>
        </div>
    )
}