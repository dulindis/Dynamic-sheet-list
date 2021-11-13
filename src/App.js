import React, { useState } from "react";
import InputField from './Components/input-field.component.jsx';
import Table from "./Components/table.component.jsx";

function App() {


  const [tableList,setTableList] = useState([])

  const [editedTableListElement, setEditedTableListElement] = useState({});


  function addElementToTable(elementName){
    const index = tableList.findIndex(item=>item.name === elementName);
    if (index === -1) {
      const elementToAdd = {
        name:elementName,
        id:setTableList.length+1
      };
      setTableList([...tableList,elementToAdd])
    }
  }

  function editElementInTable(id,newData) {
    const element = tableList.find(item=>item.id !== Number(id));
    console.log('element:',element);
    console.log('newData:',newData);
    if (element) {
        const updatedElement = {
            ...newData,
            id:element.id
          };
        setTableList([...tableList,updatedElement])
      }
    }

  function handleDeleteTableListElement(id) {
      setTableList(tableList.filter(tableItem => tableItem.id !== Number(id)));
  }

  return (
    <div className="App">
      <InputField handleSubmit={addElementToTable}/>
      <Table tableList={tableList} handleChange={handleDeleteTableListElement}/>
    </div>
  );
}

export default App;

// onDelete={e => console.log(e.target)