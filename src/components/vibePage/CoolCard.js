import './CoolCard.css';
import Vibe from '../vibePage/Vibe';
import { getElement, renderElement } from '../Home'

export default function VibeCard({ data }) {
    function openCool() {
        // const vibePage = <Vibe data={data}></Vibe>;
        // const app = getElement("App");
        // renderElement(app, vibePage);
    }
    const timeCreated = data.timeStamp && data.timeStamp.toDate().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}).toUpperCase(); // change to last time edited
    return (
        <div className='cool-card-wrapper' onClick={openCool}>
            {data.img ? <img className='cool-image' src={data.img} alt={data.vibeTitle}></img> : <img className='cool-image' src={'default-cover.png'} alt={data.vibeTitle}></img>}
            <div className='cool-date'>ADDED {timeCreated}</div>
            <div className='cool-notes-link'>
                <div className='cool-title'>{data.coolTitle}</div>
                <div className='cool-notes'>{data.coolNotes}</div>
                <a className='cool-link' href={data.coolLink} target='_blank'>{data.coolLink}</a>
            </div>
        </div>
    )
}