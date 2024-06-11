import Popup from "reactjs-popup";
import { collection, addDoc, serverTimestamp, getDocs, query, where } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getElement, removeElementByClass, renderElement } from "../Home";
import Vibe from "../vibePage/Vibe";

export default function AddCool({ inputs }) {
    const [file, setFile] = useState('');
    const [data, setData] = useState('');
    const [perc, setPerc] = useState(null);
    const [vibeTitlesList, setVibeTitlesList] = useState([]);
    const userID = localStorage.getItem('uid');
    const [vibeSelected, setVibeSelected] = useState(null);

    // add later when quota refreshed - maybe do some other things first !!!

    useEffect(() => {
        const list = [];
        const createVibesTitlesList = async() => {
            const q = query(collection(db, "vibes"), where("uid", "==", userID));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                list.push(doc.data().vibeTitle);
            })}
        createVibesTitlesList();
        setVibeTitlesList(list);
    }, [])

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

    // const vibeTitleToID = (vibeTitle) => {
    //     try{
    //     const q = query(collection(db, "vibes"), where("vibeTitle", "==", vibeTitle));
    //     const querySnapshot = await getDocs(q);
    //     const vibeData = [];
    //     querySnapshot.forEach((doc) => {
    //         vibeData.push(doc.data());
    //     });
    //     return vibeData[0].id;
    // }catch(err) {
    //     console.log(err);
    // }
    // }

    const handleAddCool = async(e) => {
        e.preventDefault();
        try{
            // open vibe page
            const q = query(collection(db, "vibes"), where("vibeTitle", "==", vibeSelected));
            const querySnapshot = await getDocs(q);
            const vibeData = [];
            const vibeIDs = [];
            querySnapshot.forEach((doc) => {
                vibeData.push(doc.data());
                vibeIDs.push(doc.id);
            });
            console.log('HERE',vibeIDs);
            const vibePage = <Vibe data={vibeData[0]}></Vibe>;
            await addDoc(collection(db, "cools"), {
                ...data,
                uid: userID,
                timeStamp: serverTimestamp(),
                vibeID: vibeIDs[0]
            });
            const app = getElement("App");
            renderElement(app, vibePage);
            removeElementByClass('popup-overlay');
        }catch(err){
            console.log(err);
        }
    }
    const handleChange = (e) => {
        setVibeSelected(e.target.value);
    }
    
    return (
        <Popup trigger=
        {<div className="edit-option">Add Cool</div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className="Edit">
                        <form className='upload-form' onSubmit={handleAddCool} autocomplete="off">
                            <div className='x-button' onClick={() => close()}>✕</div>
                            <h1 className='upload-new-cool'>ADD NEW COOL</h1>
                            <div className="inputs">
                                <div className='input-section'>
                                    <label className='upload-new-label' for="cover-image">IMAGE <span className="asterisk">*</span></label>
                                    <input className='upload-new-input' id='cover-image' name='cover-image' type='file' onChange={
                                        (e) => {
                                            setFile(e.target.files[0])
                                        }
                                    }></input>
                                </div>
                                    <div className='input-section'>
                                    <label className='upload-new-label' for="vibe-dropdown">VIBE <span className="asterisk">*</span></label>
                                    <select id='vibe-dropdown' name='vibe-dropdown' onChange={handleChange}>
                                        <option value="" selected disabled hidden>Select vibe...</option>
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
                            <button disabled={vibeSelected == null || (perc !== null && perc < 100)} className='upload-button' type='submit'>ADD COOL</button>
                            <div className='close' onClick={() => close()}>Cancel</div>
                        </form>
                        </div>
                </div>
            )
        }
    </Popup>
    )
}