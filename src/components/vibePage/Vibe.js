import Index from "../Index";
import TopMenu from "../menu/TopMenu";
import CoolCard from "./CoolCard";
import BottomMenu from "../menu/BottomMenu";
import './Vibe.css';
import { useState, useEffect } from "react";
import { getElement, removeElementByClass, renderElement } from '../Home';
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
  } from "firebase/firestore";
import {db} from '../../firebase';
import EditVibe from './EditVibe';

export default function Vibe({ data }) {
    const image = data.img;
    const timeCreated = data.timeStamp && data.timeStamp.toDate().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}).toUpperCase(); // change to last time edited
    // const description = data.vibeDescription;
    var iframeDiv = null;
    if (data.vibePlaylist) {
        const playlistLink = data.vibePlaylist;
        const re = /https:\/\/open\.spotify\.com\/playlist\/(.+)\?si=/i;
        const playlistCode = re.exec(playlistLink)[1];
        const playlistEmbedSrc = `https://open.spotify.com/embed/playlist/${playlistCode}?utm_source=generator`;
        iframeDiv = <iframe style={{borderRadius:'12px'}} src={playlistEmbedSrc} width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>;
    }

    const [cools, setCools] = useState([]);
    const userID = localStorage.getItem('uid');

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "cools"),
            (snapShot) => {
              let list = [];
              snapShot.docs.forEach((doc) => {
                //   const uid = doc._document.data.value.mapValue.fields.uid.stringValue;
                //   const vibeID = doc._document.data.value.mapValue.fields.vibeID.stringValue;
                //   if (uid === userID && vibeID === data.id) {
                //     list.push({ id: doc.id, ...doc.data() });
                //   }
                if (data.id == doc.vibeID) {
                    list.push({ id: doc.id, ...doc.data() });
                }
              });
            list.sort(function(a, b) { 
                return b.timeStamp - a.timeStamp;
            })
              setCools(list);
              console.log('THE COOLS',cools);
            },
            (error) => {
              console.log(error);
            }
          );
      
          return () => {
            unsub();
          };
        }, []);

    return (
        <div className="Vibe">
            <div className="cool-popup-container"></div>
            <div className='top-menu-container'>
                <TopMenu playlist={iframeDiv} prevPage={<Index></Index>} nextPage={null} arrowColor='black' topMenuColor='black'></TopMenu>
            </div>
            <div className='vibe-page'>
                <div className="vibe-header">
                    {image ? <img className='vibe-image' src={data.img} alt={data.vibeTitle}></img> : <img className='vibe-image' src={'default-cover.png'} alt={data.vibeTitle}></img>}
                    <div className="vibe-title-desc">
                        <div className="title-container">
                            <h1 className='vibe-title'>{data.vibeTitle}</h1>
                            <EditVibe currentVibe={data}></EditVibe>
                        </div>
                        <div className="vibe-description">{data.vibeDescription ?data.vibeDescription : ''}</div>
                        <div className="vibe-date">CREATED {timeCreated}</div>
                    </div>
                </div>
                <div className="cools-gallery">
                    <div className='cool-cards'>
                        {cools.map((cool) => (
                            <CoolCard data={cool}></CoolCard>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bottom-menu-container'>
                {/* fix this later, save previous page path */}
                <BottomMenu playlist={data.vibePlaylist ? iframeDiv : null} prevPage={<Index lastPage={<Vibe data={data}></Vibe>}></Index>} nextPage={null} arrowColor='black'></BottomMenu>
            </div>
        </div>
    )
}