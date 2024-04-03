import Popup from "reactjs-popup";
import { collection, addDoc, serverTimestamp, getDocs, query, where } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Index from "../Index";
import { getElement, removeElementByClass, renderElement } from "../Home";

export default function AddCool({ inputs }) {
    const [file, setFile] = useState('');
    const [data, setData] = useState('');
    const [perc, setPerc] = useState(null);
    const [vibeTitlesList, setVibeTitlesList] = useState([]);
    const userID = localStorage.getItem('uid');

    // add later when quota refreshed - maybe do some other things first !!!

    // useEffect(() => {
    //     const list = [];
    //     const createVibesTitlesList = async() => {
    //         const q = query(collection(db, "vibes"), where("uid", "==", userID));
    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //             list.push(doc.data().vibeTitle);
    //             console.log(doc.data().vibeTitle)
    //         })}
    //     createVibesTitlesList();
    //     setVibeTitlesList(list);
    // }, [vibeTitlesList])

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
    }

    const handleAddCool = async(e) => {
        e.preventDefault();
        try{
            await addDoc(collection(db, "cools"), {
                ...data,
                uid: userID,
                timeStamp: serverTimestamp()
              });
              // open vibe page
              const app = getElement("App");
              renderElement(app, <Index></Index>);
              removeElementByClass('popup-overlay');
        }catch(err){
            console.log(err);
        }
    }

    // bad effect loop - infinite loop: FIX!
    
    return (
        <Popup trigger=
        {<div className="edit-option">Add Cool</div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className="Edit">
                        <form className='upload-form' onSubmit={handleAddCool}>
                            <div className='x-button' onClick={() => close()}>✕</div>
                            <h1 className='upload-new-cool'>ADD NEW COOL</h1>
                            <div className="inputs">
                                <div className='input-section'>
                                    <label className='upload-new-label' for="cover-image">IMAGE</label>
                                    <input className='upload-new-input' id='cover-image' name='cover-image' type='file' onChange={
                                        (e) => {
                                            setFile(e.target.files[0])
                                        }
                                    }></input>
                                </div>
                                    <div className='input-section'>
                                    <label className='upload-new-label' for="vibe-dropdown">VIBE</label>
                                    <select id='vibe-dropdown' name='vibe-dropdown'>
                                        {vibeTitlesList.map((title) => (
                                            <option>{title}</option>
                                        ))}
                                     </select>
                                </div>
                                {inputs.map((input) => (
                                    <div className="input-section" key={input.id}>
                                        <label className='upload-new-label' for={input.id}>{input.label}</label>
                                        <input
                                            className="upload-new-input"
                                            id={input.id}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            onChange={handleInput}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button disabled={perc !== null && perc < 100} className='upload-button' type='submit'>ADD COOL</button>
                            <div className='close' onClick={() => close()}>Close</div>
                        </form>
                        </div>
                </div>
            )
        }
    </Popup>
    )
}