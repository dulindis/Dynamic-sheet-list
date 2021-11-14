import React, { useState, Fragment } from "react";
import EditableRow from "./Components/editable-row.component";
import ReadOnlyRow from './Components/readonly-row.component';


const list = [
  {itemName:'some item',
  id:1},
  {itemName:'some item2',
  id:2},
]
function App() {


  const [tableList,setTableList] = useState(list);
  const [addFormData, setAddFormData] = useState({
    itemName:''
  });
  const [editFormData, setEditFormData] = useState({
    itemName:''
  });
  const [editItemId, setEditItemId] = useState(null)

 
  
  const handleAddFormChange = e => {

    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName]=fieldValue;
    setAddFormData(newFormData)
  };

  const handleEditFormChange = (e) => {

    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = e => {

    e.preventDefault();

    const newTableInput = {
      id: tableList.length+1,
      itemName:addFormData.itemName
    }
    const newTableList =[...tableList, newTableInput]
    setTableList(newTableList);

  };

  const handleEditFormSubmit = e => {

    e.preventDefault();

    const editedTableInput = {
      id: editItemId,
      itemName:addFormData.itemName
    };

    const editedTableList =[...tableList];

    const index = tableList.findIndex(tableItem=>tableItem.id===editItemId);
    editedTableList[index] = editedTableInput;
    setTableList(editedTableList);
    setEditItemId(null);
  }

  const handleEditClick = (e, item) => {
    e.preventDefault();

    setEditItemId(item.id);
    const formValues = {
      // id:item.id,
      itemName:item.itemName
    };
    setEditFormData(formValues)
  };


  
  const handleCancelClick = () => {
    setEditItemId(null);
  };

const handleDeleteClick = (itemId) => {
    const newTableList = [...tableList];

    const index = tableList.findIndex((tableItem) => tableItem.id === itemId);

    newTableList.splice(index, 1);

    setTableList(newTableList);
  };

  return (
    <div className="App">
       
         <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {tableList.map((tableItem) => (
                    <Fragment>
                    {editItemId===tableItem.id ?
                      <EditableRow 
                        key={tableItem.id} 
                        id={tableItem.id} 
                        editFormData={editFormData} 
                        handleEditFormChange={handleEditFormChange} 
                        handleCancelClick={handleCancelClick}
                       />
                      : <ReadOnlyRow 
                        key={tableItem.id} 
                        tableItem={tableItem} 
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                        />
                      }
                    </Fragment>
                  
                ))}
              </tbody>
            </table>
         </form>
      
        <h2>Add an item:</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input 
              className="input"
              name="itemName"
              type="text" 
              placeholder="Item to add to the list."
              onChange={handleAddFormChange}
            />
            <button type='submit'>add</button>
          </form>

    </div>
  );
}

export default App;

