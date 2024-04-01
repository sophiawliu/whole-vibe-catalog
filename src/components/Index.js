import './Index.css';
import FunctionPurpose from './FunctionPurpose';
import 'reactjs-popup/dist/index.css';
import TopMenu from './menu/TopMenu';
import BottomMenu from './menu/BottomMenu';
import VibeCard from './index/VibeCard';
import { useEffect, useState } from 'react';
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
  } from "firebase/firestore";
import {db} from '../firebase';

function Index() {
    const [data, setData] = useState([]);
    const userID = localStorage.getItem('uid');
    
    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "vibes"),
            (snapShot) => {
              let list = [];
              snapShot.docs.forEach((doc) => {
                  const uid = doc._document.data.value.mapValue.fields.uid.stringValue;
                  if (uid === userID) {
                    list.push({ id: doc.id, ...doc.data() });
                  }
              });
              setData(list);
              console.log(list);
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
        <div className="Index">
            <div className='top-menu-container'>
                <TopMenu prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor='black' topMenuColor='black'></TopMenu>
            </div>
            <div className='index-page'>
                <h1 className='page-title'>TABLE OF VIBES</h1>
                <div className='vibe-cards'>
                    {data.map((vibe) => (
                        <VibeCard data={vibe}></VibeCard>
                    ))}
                </div>
            </div>
            <div className='bottom-menu-container'>
                <BottomMenu prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor='black'></BottomMenu>
            </div>
        </div>
  );
}

export default Index;