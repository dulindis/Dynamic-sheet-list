import React from 'react'

const EditableRow = ({id,editFormData, handleEditFormChange,  handleCancelClick}) => {
    return (
             <tr>
                 <td>{id}</td>

                 <td>
                    <input 
                        className="input"
                        name="itemName"
                        type="text" 
                        placeholder="Item to add to the list."
                        value={editFormData.itemName}
                        onChange={handleEditFormChange}
                    />
                 </td>
                 <td>
                 <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                Cancel
                </button>
                 </td>
              </tr>
    )
}

export default EditableRow
