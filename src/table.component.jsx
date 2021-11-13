// import React, { useState } from "react";
// // import TagsList from "./TagsList";
// import InputField from "./input-field.component";


// export default function Table({ list, handleChange }) {

// // const [tableTagList, updateTableTagList] = useState([]);
//   const [editedListElement, setEeditedListElement] = useState('');

//   function updateListElement (id,listElement) {
//     const element = list.find(item=>item.id === Number(id));
//     if (element) {
//       const updatedElement = {
//         name:newElementName,
//       };
//       setEeditedListElement([...editedListElement,updatedElement])
//     }
//   }

//   return (
//     <table className="table is-hoverable">
//       <thead>
//         <tr>
//           <th>
//             <abbr title="Id">Id</abbr>
//           </th>
//           <th>
//             <abbr title="Name">Name</abbr>
//           </th>
//           <th>
//             <abbr title="Options">Options</abbr>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//       {
//           list ? list.map((listItem,index)=>(
//                 <tr key={index} onClick={() => {console.log('list item',listItem);handleChange(listItem.id,listItem.name)}}>
//                     <th>{listItem.id}</th>
//                     <td>{listItem.name}</td>
//                     <td>
//                         <div className="tags">
//                           <span key='1' className='tag is-success' onClick={(e)=>{console.log(e)}} data-action='edit'>Edit</span>
//                           <span key='2' className='tag is-info' onClick={(e)=>{console.log(e)}} data-action='save'>Save</span>
//                           <span key='3' className='tag is-danger' onClick={(e)=>{console.log(e)}} data-action='delete'>Delete</span>
//                         </div>
//                     </td>






//                     {/* <td> <TagsList  tags={['edit','delete','save']} onClick={e=>console.log(e.target)}/></td> */}
//                 </tr>
//             )) : ''
//         }
        
//       </tbody>
//     </table>
//   );
// }



// // <input 
// // className="input" 
// // type="text" 
// // placeholder="Item to add to the list."
// // onChange={event=>setItem(event.target.value)}
// // />