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
    const playlistLink = data.vibePlaylist;
    const re = /https:\/\/open\.spotify\.com\/playlist\/(.+)\?si=/i;
    const playlistCode = re.exec(playlistLink)[1];
    const playlistEmbedSrc = `https://open.spotify.com/embed/playlist/${playlistCode}?utm_source=generator`;
    const title = data.vibeTitle;
    const iframeDiv = <iframe style={{borderRadius:'12px'}} src={playlistEmbedSrc} width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>;
    return (
        <div className="Vibe">
            <div className='top-menu-container'>
                <TopMenu playlist={iframeDiv} prevPage={<Index></Index>} nextPage={null} arrowColor='black' topMenuColor='black'></TopMenu>
            </div>
            <div className='vibe-page'>
                <div className="vibe-header">
                    <img className='vibe-image' src={image} alt={data.vibeTitle}></img>
                    <div className="vibe-title-desc">
                        <h1 className='vibe-title'>{title}</h1>
                        <div className="vibe-description">{description}<span className="vibe-date"> | {timeCreated}</span></div>
                    </div>
                </div>

            </div>
            <div className='bottom-menu-container'>
                {/* fix this later, save previous page path */}
                <BottomMenu playlist={iframeDiv} prevPage={<Index lastPage={<Vibe data={data}></Vibe>}></Index>} nextPage={null} arrowColor='black'></BottomMenu>
            </div>
        </div>
    )
}