import React, { useState } from "react";
import Row from "./Components/Row.component";
import CustomButton from "./Components/CustomButton.component";
import Input from './Components/Input.component';

function App() {

  //state
  const [tableList, setTableList] = useState([]);

  const [addItem, setAddItem] = useState({name:''});

  const [editItemId, setEditItemId] = useState(null);
  const [editTableItemData, setEditTableItemData] = useState({});


  //generate proper id

  const idGenerator =(() => {
    let idVal =0;


    const existingIdValues = tableList.map(tableItem => tableItem.id).sort((a,b)=> a-b);
    const existingIdValuesMaxVal =Math.max.apply(Math, existingIdValues);
    // Math.max(existingIdValues);

    console.log('existingIdValues',existingIdValues);
    console.log('existingIdValuesMaxVal',existingIdValuesMaxVal);

    if (existingIdValues.length !== existingIdValuesMaxVal) {
      idVal = existingIdValuesMaxVal+1
    }
    else {
      idVal = existingIdValues.length+1;
    }
    return function (){
      return idVal ;
    }
  })()

  // ADDING - input change and formsubmit
  const handleAddTableChange = (e) => {
    e.preventDefault();
    const item = {name: e.target.value};
    setAddItem(item);
  };

  const handleAddTableSubmit = (e) => {
    e.preventDefault();

    const index = tableList.findIndex(tableItem=>tableItem.name === addItem.name);

    if (index === -1) {
      const newItem = {
        // id: tableList.length + 1,
        id: idGenerator(),
        name: addItem.name,
        editMode:false
      };
      const newList = [...tableList, newItem];
      setTableList(newList);
      setAddItem({name:''});
    } else {
      alert('The item already exists on the list. Please write another item.')
    }
  };

  // EDITING - button-click, input change and formsubmit

  const handleEditClick = (e, item) => {
    resetEdit();
    e.preventDefault();
    setEditItemId(item.id);

    const searchedElement = tableList.find(tableItem => tableItem.id===item.id);
    const editedItem = {...searchedElement,
        editMode:true,
    };
    setEditTableItemData(editedItem);

    const searchedElementIndex = tableList.findIndex(tableItem => tableItem.id===item.id);

    const updatedList = [...tableList];
    updatedList[searchedElementIndex] = editedItem
    setTableList(updatedList);


  };

  const handleEditTableChange = (e) => {
    e.preventDefault();

    const updatedItem = {...editTableItemData};
    updatedItem['name'] = e.target.value;

    setEditTableItemData(updatedItem);
  };

  const handleEditTableSubmit = (e) => {
    e.preventDefault();
    const index = tableList.findIndex(tableItem=>tableItem.id === editItemId);
    const updatedItem = 
    {...editTableItemData, 
      editMode:false
    };
    const newTableList = [...tableList];
    newTableList[index] = updatedItem;
    setTableList(newTableList);
    setEditItemId(null);
    setEditTableItemData({})
  }

  const handleDeleteTableChange = (e,item) => {
    e.preventDefault();
    const newList = tableList.filter(listItem=> listItem.id !== item.id);
    setTableList(newList);
  }

  const resetEdit = () => {
    const indexOfActiveEditModeElement = tableList.findIndex(tableItem=> tableItem.editMode===true);
    if (indexOfActiveEditModeElement!== -1) {
      const currentlyActiveElement = tableList[indexOfActiveEditModeElement];
      currentlyActiveElement.editMode=false;
      const updatedList = [...tableList];
      updatedList[indexOfActiveEditModeElement] = currentlyActiveElement
      setTableList(updatedList);
    }
  }

  const handleCancelClick = () => {
    resetEdit();
    setEditItemId(null);
    setEditTableItemData({})
  };

  return (
    <div className="App">
      <div style={{width:'30%'}} className="input-adding-section is-one-third">
        <h2>Add an item:</h2>
        <form  onSubmit={handleAddTableSubmit}>
          <Input 
            className="input"
            name="name"
            type="text"
            placeholder="Item to add to the list."
            value={addItem.name}
            onChange={handleAddTableChange}
          />
          <CustomButton type="submit">submit</CustomButton>
        </form>
      </div>

      <div className="table-display-section">
      {/* handleadTableSubmit  bylo wczesniej*/}
        <form onSubmit={handleEditTableSubmit}>
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
              {tableList.map((tableItem) => (
                <tr>
                       <Row
                        key={tableItem.id}
                        tableItem={tableItem}
                        value={editTableItemData}
                        handleCancelClick={handleCancelClick}
                        handleEditClick={handleEditClick}
                        handleDeleteTableChange={handleDeleteTableChange}
                        onChange={handleEditTableChange}
                        />
                </tr>
                ))
              }
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
