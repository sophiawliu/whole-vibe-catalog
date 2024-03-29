import Popup from "reactjs-popup"

export default function CreateVibe() {
    return (
        <Popup trigger=
        {<div className="edit-option">Create Vibe</div>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className="Edit">
                        <form className='upload-form'>
                            <h1 className='upload-new-cool'>Create New Vibe</h1>
                            <div className="inputs">

                                <div className='input-section'>
                                    <label className='upload-new-label' for="cool-description">TITLE</label>
                                    <input className='upload-new-input' name='title'></input>
                                </div>
                                <div className='input-section'>
                                    <label className='upload-new-label' for="cool-description">DESCRIPTION</label>
                                    <textarea className='upload-new-input' id='cool-description' name='cool-description' rows={3}></textarea>
                                </div>
                                <div className='input-section'>
                                    <label className='upload-new-label' for="cool-description">SPOTIFY PLAYLIST</label>
                                    <input className='upload-new-input' name='playlist'></input>
                                </div>
                                <div className='input-section'>
                                    <label className='upload-new-label' for="upload-image">COVER IMAGE</label>
                                    <input className='upload-new-input' id='upload-image' name='upload-image' type='file'></input>
                                </div>

                            </div>
                            <button className='upload-button' type='submit'>UPLOAD</button>
                            <div className='close' onClick={() => close()}>Close</div>
                        </form>
                        </div>
                </div>
            )
        }
    </Popup>
    )
}