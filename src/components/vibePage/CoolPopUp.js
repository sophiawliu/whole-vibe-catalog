import './CoolPopUp.css';
import { removeElementByClass, getElement, renderElement } from '../Home';
import EditCool from './EditCool';

export default function CoolPopUp({ cool }) {
    const timeCreated = cool.timeStamp && cool.timeStamp.toDate().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}).toUpperCase(); // change to last time edited

    const closePopUp = () => {
        removeElementByClass('cool-overlay');
    }

    return (
        <div className='cool-overlay'>
            <div className='popUpContainer'>
                <div className='x-button' onClick={closePopUp}>✕</div>
                <div className='image-wrapper'>
                    {cool.img ? <img className='popup-image' src={cool.img} alt={cool.vibeTitle}></img> : <img className='popup-image' src={'default-cover.png'} alt={cool.vibeTitle}></img>}
                    <EditCool currentCool={cool}></EditCool>
                </div>
                <div className='popup-notes-link'>
                    <div className='popup-date'>ADDED {timeCreated}</div>
                    <div className='popup-title'>{cool.coolTitle}</div>
                    <div className='popup-notes'>{cool.coolNotes}</div>
                    <a className='popup-link' href={cool.coolLink} target='_blank'>{cool.coolLink}</a>
                </div>
            </div>
        </div>
    )
}