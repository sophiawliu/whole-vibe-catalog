import './VibeCard.css';
import Vibe from '../vibePage/Vibe';
import { getElement, renderElement } from '../Home'

export default function VibeCard({ data }) {
    function openVibe() {
        const vibePage = <Vibe data={data}></Vibe>;
        const app = getElement("App");
        renderElement(app, vibePage);
    }
    return (
        <div className='card-wrapper' onClick={openVibe}>
            {data.img ? <img className='card-image' src={data.img} alt={data.vibeTitle}></img> : <img className='card-image' src={'default-cover.png'} alt={data.vibeTitle}></img>}
            <div className='card-title'>{data.vibeTitle}</div>
            <div className='card-description'>{data.vibeDescription}</div>
        </div>
    )
}