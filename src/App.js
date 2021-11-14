import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./Components/ReadOnlyRow.component";
import EditableRow from "./Components/EditableRow.component";
import CustomButton from "./Components/CustomButton.component";

// const list = [
//   { name: "some item", id: 1 },
//   { name: "some item2", id: 2 },
// ];

function App() {
  // const [tableList, setTableList] = useState(list);
  const [tableList, setTableList] = useState([]);
  const [addItem, setAddItem] = useState({name:''});

  const [editItemId, setEditItemId] = useState(null);
  const [editTableItemData, setEditTableItemData] = useState({});

  // ADDING - input change and formsubmit
  const handleAddTableChange = (e) => {
    e.preventDefault();
    const item = {
      name: e.target.value,
    };
    setAddItem(item);
  };

  const handleAddTableSubmit = (e) => {
    e.preventDefault();

    const index = tableList.findIndex(tableItem=>tableItem.name === addItem.name);
    if (index === -1) {
      const newItem = {
        id: tableList.length + 1,
        name: addItem.name,
      };
      const newList = [...tableList, newItem];
      setTableList(newList);
      setAddItem({name:''});

    }
  };

  // EDITING - button-click, input change and formsubmit

  const handleEditClick = (e, item) => {
    e.preventDefault();
    setEditItemId(item.id);
    setEditTableItemData(item);
  };

  const handleEditTableChange = (e) => {
    e.preventDefault();
    const updatedItem = {...editTableItemData};
    updatedItem['name'] = e.target.value;
    setEditTableItemData(updatedItem);
  };

  const handleEditTableSubmit = (e) => {
    e.preventDefault();
    
    // const updatedItem = {
    //   id: editItemId,
    //   name: editTableItemData.name
    // };
    const newTableList = [...tableList];

    const index = tableList.findIndex(tableItem=>tableItem.id === editItemId);
    newTableList[index] = editTableItemData;
    setTableList(newTableList);
    setEditItemId(null);
  }

  const handleDeleteTableChange = (e,item) => {
    e.preventDefault();
    console.log(
      'from delete'
    );
    const newList = tableList.filter(listItem=> listItem.id !== item.id);
    setTableList(newList);
  }


  const handleCancelClick = () => {
    setEditItemId(null);
  };

  return (
    <div className="App">
      <div style={{width:'30%'}} className="input-adding-section is-one-third">
        <h2>Add an item:</h2>
        <form  onSubmit={handleAddTableSubmit}>
          <input
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
                <Fragment>
                  {editItemId === tableItem.id ? (
                    <EditableRow
                      key={tableItem.id}
                      id={tableItem.id}
                      editTableItemData={editTableItemData}
                      handleEditTableChange={handleEditTableChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      key={tableItem.id}
                      tableItem={tableItem}
                      handleEditClick={handleEditClick}
                      handleDeleteTableChange={handleDeleteTableChange}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
