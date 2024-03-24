import './Cover.css';
import {removeElementByClass, renderElement, getElement} from './LogIn';
import FunctionPurpose from './FunctionPurpose';
import * as ReactDOM from 'react-dom';

function handleEnter() {
    removeElementByClass("Cover");
    const app = getElement("App");
    const funcPurp = <FunctionPurpose></FunctionPurpose>;
    renderElement(app, funcPurp);
}
function Cover() {
    return (
    <div className="Cover">
        <div className="page">
        <h1>WHOLE VIBE CATALOG</h1>
            <h2>access to cools</h2>
            <div className="login">
                <div className="earth"></div>
            </div>
            <div>
                <h3>Spring 2024</h3>
                <h3>$0</h3>
            </div>
        </div>
        <div class="corner-buttons-container">
            <div className='corner-buttons'>
                <div className='corner-button top-left'>LOG OUT</div>
                <div className='corner-button top-right'>INDEX</div>
                <div className='corner-button bottom-left'></div>
                <div className='corner-button bottom-right' onClick={handleEnter}>ENTER ▶</div>
            </div>
        </div>
    </div>
  );
}

export default Cover;
