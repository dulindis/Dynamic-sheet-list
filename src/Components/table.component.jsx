import React, { useState } from "react";
import ButtonTag from "./button-tag.component";


export default function Table({ tableList, handleChange }) {

    const [activity,setActivity] = useState('');
    const [editedItem, setEditedItem] =useState('');

  
    return (
        <table className="table is-hoverable">
          <thead>
            <tr>
              <th>
                <abbr title="Id">Id</abbr>
              </th>
              <th>
                <abbr title="Name">Name</abbr>
              </th>
              <th>
                <abbr title="Options">Options</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
          {
            tableList ? tableList.map((listItem,index)=>(
                    <tr key={index} onClick={() => {console.log('list item',listItem);handleChange(listItem.id,listItem.name)}}>
                        <th>{listItem.id}</th>
                        <td>{listItem.name}</td>
                        <td>
                            <div className="tags" onClick={(e)=>{setActivity(e.target.dataAction); console.log(activity)}}>
{/* 
                          {
                            if (activity==='edit'){
                              return ( <ButtonTag type='save' onClick={(e)=>{console.log(e)}}/>) 
                            } 

                          } */}
                                <ButtonTag type='edit' handleChange={handleChange}/>
                                {/* <ButtonTag type='save' onClick={(e)=>{console.log(e)}}/> */}
                                <ButtonTag type='delete' handleChange={handleChange}/>
                            </div>
                        </td>
                    </tr>
                )) : ''
            }
            
          </tbody>
        </table>
      );



}