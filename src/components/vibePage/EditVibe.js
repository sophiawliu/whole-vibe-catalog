import Popup from "reactjs-popup";
import { collection, addDoc, serverTimestamp, getDocs, query, where, updateDoc, doc, getDoc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getElement, removeElementByClass, renderElement } from "../Home";
import Vibe from "./Vibe";

export default function EditVibe({ currentVibe }) {
    const [file, setFile] = useState('');
    const [data, setData] = useState(currentVibe);
    const [perc, setPerc] = useState(null);
    const userID = localStorage.getItem('uid');

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPerc(progress);
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
                }
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((prev) => ({...prev, img: downloadURL}))
                });
            }
            );
        };
        file && uploadFile();
    }, [file]);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
        // console.log('data', ...data);
        // updateDoc(doc(db, 'vibes', currentVibe.id), {
        //     ...data, 
        //     [id]: value
        // })
    }

    console.log(currentVibe.id, currentVibe);

    const handleEdit = async(e) => {
        e.preventDefault();
        try{
            updateDoc(doc(db, 'vibes', currentVibe.id), {
                ...data
            })
            const list = [];
            const q = query(collection(db, "vibes"), where("id", "==", currentVibe.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                list.push(doc.data());
                console.log('found')
            })
            const vibePage = <Vibe data={list[0]}></Vibe>;
            console.log('list0',list[0])
            const app = getElement("App");
            renderElement(app, vibePage);
            removeElementByClass('popup-overlay');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Popup trigger=
        {<div className="popup-option">Edit</div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className="Edit">
                        <form className='upload-form' onSubmit={handleEdit} autocomplete="off">
                            <div className='x-button' onClick={() => close()}>✕</div>
                            <h1 className='upload-new-cool'>EDIT VIBE</h1>
                            <div className="inputs">
                                <div className='input-section'>
                                    <label className='upload-new-label' for="cover-image">UPLOAD NEW IMAGE</label>
                                    <input className='upload-new-input' id='cover-image' name='cover-image' type='file' onChange={
                                        (e) => {
                                            if (e.target.files) {
                                                setFile(e.target.files[0]);
                                            } else {
                                                console.log('NO IMAGE')
                                            }
                                        }
                                    }>
                                    </input>
                                </div>
                                <div className="input-section" key='vibeTitle'>
                                    <label className='upload-new-label' for='vibeTitle'>EDIT TITLE</label>
                                    <input
                                        className="upload-new-input"
                                        id='vibeTitle'
                                        type='text'
                                        onChange={handleInput}
                                        defaultValue={currentVibe.vibeTitle}
                                    />
                                </div>
                                <div className="input-section" key='vibeDescription'>
                                    <label className='upload-new-label' for='vibeTitle'>EDIT DESCRIPTION</label>
                                    <input
                                        className="upload-new-input"
                                        id='vibeDescription'
                                        type='text'
                                        defaultValue={currentVibe.vibeDescription}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="input-section" key='vibePlaylist'>
                                    <label className='upload-new-label' for='vibePlaylist'>NEW SPOTIFY PLAYLIST</label>
                                    <input
                                        className="upload-new-input"
                                        id='vibePlaylist'
                                        type='url'
                                        defaultValue={currentVibe.vibePlaylist}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <button disabled={perc !== null && perc < 100} className='upload-button' type='submit'>SAVE CHANGES</button>
                            <div className='close' onClick={() => close()}>Cancel</div>
                        </form>
                        </div>
                </div>
            )
        }
    </Popup>
    )
}