import React from "react";
import { getElement, renderElement } from "../Home";
import Edit from "../edit/Edit";
import './Menu.css'

export default function BottomMenu({ playlist, prevPage, nextPage, arrowColor }) {
    
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

    return (
        <div className='bottom-menu'>
            {playlist}
            <div className="arrows-container">
                {leftArrowButton(prevPage)}
                {rightArrowButton(nextPage)}
            </div>
            <Edit></Edit>
        </div>
    )
}