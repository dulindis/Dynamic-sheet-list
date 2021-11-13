import React from 'react'

const ReadOnlyRow = ({tableItem,handleEditClick, handleDeleteClick}) => {
    return (
       
             <tr>
                <td>{tableItem.id}</td>
                <td>{tableItem.itemName}</td>
                <td>
                    <button type='button' onClick={e=>handleEditClick(e,tableItem)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(tableItem.id)}>Delete
        </button>
                </td>
              </tr>
    )
}

export default ReadOnlyRow
