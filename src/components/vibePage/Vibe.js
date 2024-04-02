import Index from "../Index";
import TopMenu from "../menu/TopMenu";
import VibeCard from "../index/VibeCard";
import BottomMenu from "../menu/BottomMenu";
import './Vibe.css';
import Edit from "../edit/Edit";

export default function Vibe({ data }) {
    const image = data.img;
    const timeCreated = data.timeStamp.toDate().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}); // change to last time edited
    console.log(timeCreated)
    const description = data.vibeDescription;
    const playlist = data.vibePlaylist;
    const re = /https://open\.spotify\.com/playlist/[A-Za-z0-9]+\?si=/;
    return re.exec(email)[0];
    const title = data.vibeTitle;
    return (
        <div className="Vibe">
            <div className='top-menu-container'>
                <TopMenu prevPage={<Index></Index>} nextPage={null} arrowColor='black' topMenuColor='black'></TopMenu>
            </div>
            <div className='vibe-page'>
                <div className="vibe-header">
                    <img className='vibe-image' src={image} alt={data.vibeTitle}></img>
                    <div className="vibe-title-desc">
                        <h1 className='vibe-title'>{title}</h1>
                        <div className="vibe-description">{description}<span className="vibe-date"> | {timeCreated}</span></div>

                        <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/1D9JKKyXHhRYWSIcXQEpv7?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>

            </div>
            <div className='bottom-menu-container'>
                {/* fix this later, save previous page path */}
                <BottomMenu prevPage={<Index lastPage={<Vibe data={data}></Vibe>}></Index>} nextPage={null} arrowColor='black'></BottomMenu>
            </div>
        </div>
    )
}