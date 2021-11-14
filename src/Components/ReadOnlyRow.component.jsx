import React from 'react';
import CustomButton from './CustomButton.component.jsx';

const ReadOnlyRow = ({tableItem, handleEditClick, handleDeleteTableChange}) => {
    return (
       
             <tr>
                <td>{tableItem.id}</td>
                <td>{tableItem.name}</td>
                <td>
                    <CustomButton type='button' onClick={e=>handleEditClick(e,tableItem)}>Edit</CustomButton>
                    <CustomButton type='button' onClick={e=>handleDeleteTableChange(e,tableItem)}>Delete</CustomButton>
                </td>
              </tr>
    )
}

export default ReadOnlyRow
