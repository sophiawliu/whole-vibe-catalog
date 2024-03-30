import Popup from "reactjs-popup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../firebase';
import { useState } from "react";

export default function CreateVibe({ inputs, userID }) {
    const [file, setFile] = useState('');
    const [data, setData] = useState('');

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });

        console.log(data);
    }

    const handleCreateVibe = async(e) => {
        e.preventDefault();
        try{
            await addDoc(collection(db, "vibes"), {
                ...data,
                UID: userID, 
                timeStamp: serverTimestamp()
              });
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Popup trigger=
        {<div className="edit-option">Create Vibe</div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className="Edit">
                        <form className='upload-form' onSubmit={handleCreateVibe}>
                            <h1 className='upload-new-cool'>Create New Vibe</h1>
                            <div className="inputs">
                                {inputs.map((input) => (
                                    <div className="input-section" key={input.id}>
                                        <label className='upload-new-label'>{input.label}</label>
                                        <input
                                            className="upload-new-input"
                                            id={input.id}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            onChange={handleInput}
                                        />
                                    </div>
                                ))}
                                <div className='input-section'>
                                    <label className='upload-new-label' for="cover-image">COVER IMAGE</label>
                                    <input className='upload-new-input' id='cover-image' name='upload-image' type='file'></input>
                                </div>

                            </div>
                            <button className='upload-button' type='submit'>CREATE VIBE</button>
                            <div className='close' onClick={() => close()}>Close</div>
                        </form>
                        </div>
                </div>
            )
        }
    </Popup>
    )
}