import React, {Fragment} from 'react';
import Input from './Input.component';
import CustomButton from './CustomButton.component';


const Row = ({tableItem,value, placeholder, handleCancelClick,handleEditClick,handleDeleteTableChange, onChange}) => {
    console.log(tableItem)
    return (
        <Fragment>
            <td>{tableItem.id}</td>
            <td>
                {(tableItem.editMode)?
                    <Input value={value.name} onChange={onChange} placeholder='edit the content'/> 
                    : <td>{tableItem.name}</td>
                }
            </td>
            <td>
                {(tableItem.editMode)?
                <Fragment>
                    <CustomButton type="submit">Save</CustomButton>
                    <CustomButton type='button' onClick={()=>handleCancelClick()}>Cancel</CustomButton>
                </Fragment> 
                :  
                <Fragment>
                    <CustomButton type='button' onClick={e=>handleEditClick(e,tableItem)}>Edit</CustomButton>
                    <CustomButton type='button' onClick={e=>handleDeleteTableChange(e,tableItem)}>Delete</CustomButton>
                </Fragment>
                
                
                }
            </td>
        </Fragment>
    )


}

export default Row


// {(tableItem.editMode) ?
    
//     (<Fragment>
//         <td>{tableItem.id}</td>
//         <Input onChange={onChange}/>
//         <td>
//             <CustomButton type="submit">Save</CustomButton>
//             <CustomButton type='button' onClick={()=>handleCancelClick()}>Cancel</CustomButton>
//         </td>
//     </Fragment>)

//     :

//    ( <Fragment>
//          <td>{tableItem.id}</td>
//          <td>{tableItem.name}</td>
//          <td>
//             <CustomButton type='button' onClick={e=>handleEditClick(e,tableItem)}>Edit</CustomButton>
//             <CustomButton type='button' onClick={e=>handleDeleteTableChange(e,tableItem)}>Delete</CustomButton>
//         </td>
//     </Fragment>)
    
//     }