import React, { useState } from "react";
import InputField from './input-field.component';
import CountriesList from "./CountriesList";
import TagsList from "./TagsList";

// const list = [
//   { id: 1, name: "Argentina" },
//   { id: 2, name: "Bolivia" },
//   { id: 3, name: "Brazil" },
//   { id: 4, name: "Chile" },
//   { id: 5, name: "Colombia" },
//   { id: 6, name: "Ecuador" },
//   { id: 7, name: "Guyana" },
//   { id: 8, name: "Paraguay" },
//   { id: 9, name: "Peru" },
//   { id: 10, name: "Suriname" },
//   { id: 11, name: "Uruguay" },
//   { id: 12, name: "Venezuela" },
// ];

function App() {
  const [list,setList] = useState([])
  const [tags, setTags] = useState([]);


  function addElementToList(elementName){
    console.log('addelement is working', elementName)
    const elementToAdd = {
      name:elementName,
      id:list.length+1
    };
    setList([...list,elementToAdd])
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
      <InputField currentList={list} onClick={addElementToList}/>
      <CountriesList list={list} onSelect={id => handleAddTags(id)} />
      <TagsList tags={tags} onDelete={id => handleDeleteTag(id)} />
    </div>
  );
}

export default App;
