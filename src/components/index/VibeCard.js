import './VibeCard.css';

export default function VibeCard({ data }) {
    return (
        <div className='card-wrapper'>
            <img className='card-image' src='hiroshi.png' alt="'80s On The Water"></img>
            <div className='card-title'>'80s On The Water</div>
            <div className='card-description'>Poolsuite FM & Vacation Inc.</div>
        </div>
        // <div className='card-wrapper'>
        //     <img className='card-image' src={data.img} alt={data.vibeTitle}></img>
        //     <div className='card-title'>{data.vibeTitle}</div>
        //     <div className='card-description'>{data.vibeDescription}</div>
        // </div>
    )
}