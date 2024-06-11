import Popup from "reactjs-popup";
import { collection, addDoc, serverTimestamp, getDocs, query, where, updateDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getElement, removeElementByClass, renderElement } from "../Home";
import Vibe from "./Vibe";

export default function EditCool({ currentCool }) {
    const [file, setFile] = useState('');
    const [data, setData] = useState(currentCool);
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
    }

    const handleEdit = async(e) => {
        e.preventDefault();
        try{
            updateDoc(doc(db, 'cools', currentCool.id), {
                ...data
            })
            const list = [];
            const q = query(collection(db, "cools"), where("id", "==", currentCool.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                list.push(doc.data());
            })
            removeElementByClass('popup-overlay');
            removeElementByClass('cool-overlay');
        }catch(err){
            console.log(err);
        }
    }

    const deleteCool = async(e) => {
        e.preventDefault();
        try{
            const res = await deleteDoc(doc(db, "cools", currentCool.id));
            removeElementByClass('popup-overlay');
            removeElementByClass('cool-overlay');
        }catch(err){
            console.log(err);
        }
    }
    const areYouSure = () => {
        const closeContainer = getElement('close-container');
        const deleteCoolButton = <div className='close' onClick={areYouSure}>Delete Cool</div>;
        const confirmDiv = <div className="confirm-div-container">
            <div className="confirm-div-q">Delete this Cool?</div>
            <div className="confirm-div" onClick={deleteCool}>YES</div>
            <div className="confirm-div" onClick={() => {renderElement(closeContainer, deleteCoolButton);}
            }>NO</div>
        </div>;
        renderElement(closeContainer, confirmDiv);
    }

    return (
        <Popup trigger=
        {<div className="popup-option-cool">Edit</div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className="Edit">
                        <form className='upload-form' onSubmit={handleEdit} autocomplete="off">
                            <div className='x-button' onClick={() => close()}>✕</div>
                            <h1 className='upload-new-cool'>EDIT COOL</h1>
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
                                <div className="input-section" key='coolTitle'>
                                    <label className='upload-new-label' for='coolTitle'>EDIT TITLE</label>
                                    <input
                                        className="upload-new-input"
                                        id='coolTitle'
                                        type='text'
                                        onChange={handleInput}
                                        defaultValue={currentCool.coolTitle}
                                    />
                                </div>
                                <div className="input-section" key='coolNotes'>
                                    <label className='upload-new-label' for='coolTitle'>EDIT DESCRIPTION</label>
                                    <input
                                        className="upload-new-input"
                                        id='coolNotes'
                                        type='text'
                                        defaultValue={currentCool.coolNotes}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="input-section" key='coolLink'>
                                    <label className='upload-new-label' for='coolLink'>NEW LINK</label>
                                    <input
                                        className="upload-new-input"
                                        id='coolLink'
                                        type='url'
                                        defaultValue={currentCool.coolLink}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <button disabled={perc !== null && perc < 100} className='upload-button' type='submit'>SAVE</button>
                            <div className="close-container">
                                <div className='close' onClick={areYouSure}>Delete Cool</div>
                            </div>
                        </form>
                        </div>
                </div>
            )
        }
    </Popup>
    )
}