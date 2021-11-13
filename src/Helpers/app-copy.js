import React, { useState } from "react";
import InputField from './input-field.component';
import Table from "./table.component";

function App() {
  const [tableList,setTableList] = useState([])


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

  function updateTheTable(id,newElementName){
  
      const element = tableList.find(item=>item.id === Number(id));
      if (element) {
        const updatedElement = {
          name:newElementName,
          id
        };
        setTableList([...tableList,updatedElement])
      }
    
  }
  // function handleAddTags(id) {
  //   const index = tags.findIndex(item => item.id === Number(id));
  //   if (index === -1) {
  //     const tag = list.find(item => item.id === Number(id));
  //     setTags([...tags, tag]);
  //   }
  // }


  // function handleDeleteTag(id) {
  //   setTags(tags.filter(tag => tag.id !== Number(id)));
  // }

  return (
    <div className="App">
      <InputField currentList={tableList} handleSubmit={addElementToTable}/>
      {/* <TagsList tags={tags} onDelete={id => handleDeleteTag(id)} /> */}
      <Table list={tableList} handleChange={updateTheTable}/>
    </div>
  );
}

export default App;

// onDelete={e => console.log(e.target)