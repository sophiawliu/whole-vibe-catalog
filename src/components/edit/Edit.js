import './Edit.css';
import { getElement, renderElement } from "../Home";
import CreateVibe from './CreateVibe';
import AddCool from './AddCool';
import { createVibeInputs, addCoolInputs } from './formSource';

function Edit() {

    function showEditOptions() {
        const editContainer = getElement('edit-container');
        const editSubcontainer = <div className='edit-subcontainer'>
            <div className='edit-options-container'>
                <div className='edit-options'>
                    <AddCool inputs={addCoolInputs}></AddCool>
                    <CreateVibe inputs={createVibeInputs}></CreateVibe>
                </div>
            </div>
            <div className='edit-button' onClick={hideEditOptions}>
                <div className='plus'>+</div>
            </div>
        </div>
        renderElement(editContainer, editSubcontainer);
    }
    
    function hideEditOptions() {
        const editContainer = getElement('edit-container');
        const editSubcontainer = <div className='edit-subcontainer'>
            <div className='edit-options-container'>
                <div className='edit-options'></div>
            </div>
            <div className='edit-button' onClick={showEditOptions}>
                <div className='plus'>+</div>
            </div>
        </div>
        renderElement(editContainer, editSubcontainer);
    }

    return (
        <div className='edit-container'>
            <div className='edit-subcontainer'>
                <div className='edit-options-container'></div>
                <div className='edit-button' onClick={showEditOptions}>
                    <div className='plus'>+</div>
                </div>
            </div>
        </div>
  );
}

export default Edit;