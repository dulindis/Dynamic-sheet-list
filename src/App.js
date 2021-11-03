import React, { useState } from "react";
import InputField from './input-field.component';
import CountriesList from "./CountriesList";
import TagsList from "./TagsList";
import Table from "./table.component";

function App() {
  const [list,setList] = useState([])
  const [tags, setTags] = useState([]);


  function addElementToList(elementName){
    const index = list.findIndex(item=>item.name === elementName);
    if (index === -1) {
      const elementToAdd = {
        name:elementName,
        id:list.length+1
      };
      setList([...list,elementToAdd])
    }
  }

  function handleAddTags(id) {
    const index = tags.findIndex(item => item.id === Number(id));
    if (index === -1) {
      const tag = list.find(item => item.id === Number(id));
      setTags([...tags, tag]);
    }
  }

  function handleDeleteTag(id) {
    setTags(tags.filter(tag => tag.id !== Number(id)));
  }

  return (
    <div className="App">
      <InputField currentList={list} handleSubmit={addElementToList}/>
      { list.length>0 ? ( <CountriesList list={list} onSelect={id => handleAddTags(id)} />) : ''}
      {/* <CountriesList list={list} onSelect={id => handleAddTags(id)} /> */}
      <TagsList tags={tags} onDelete={id => handleDeleteTag(id)} />
      <Table tags={tags} onDelete={id => handleDeleteTag(id)}/>
    </div>
  );
}

export default App;
