import React from 'react';
import CustomButton from './CustomButton.component.jsx';


const EditableRow = ({id, editTableItemData, handleEditTableChange,handleCancelClick}) => {
    return (
             <tr>
                 <td>{id}</td>

                 <td>
                    <input 
                        className="input"
                        name="name"
                        type="text" 
                        value={editTableItemData.name} 
                        placeholder="Item to add to the list."
                        onChange={handleEditTableChange}
                    />
                 </td>
                 <td>
                 <CustomButton type="submit">Save</CustomButton>
                 <CustomButton type='button' onClick={handleCancelClick}>Cancel</CustomButton>

                 {/* <button type="submit">Save</button>
                 <button type='button' onClick={handleCancelClick}>Cancel</button> */}
                {/* <button type="button" 
                // onClick={handleCancelClick}
                >
                Cancel
                </button> */}
                 </td>
              </tr>
    )
}

export default EditableRow
