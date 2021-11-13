import React from "react";

export default function TagsList({ tags, onClick }) {
  // const [tags, setTags] = useState([]);

  // function handleDeleteTag(id) {
  //   // setTags(tags.filter(tag => tag.id !== Number(id)));
  // }
  function generateTagProps(tag,index) {

    let tagProps = {
      className:'',
      onClick:'',
      isActive:'',
      dataAction:''
    };
    
    switch (tag) {
      case 'edit':
        tagProps.className='tag is-success';
        tagProps.dataAction='edit';
        break;
      case 'delete':
        tagProps.className='tag is-danger';
        tagProps.dataAction='delete'
          break;
      case 'save':
        tagProps.className='tag is-info';
        tagProps.dataAction='save'
            break;
        default:
      console.log('no tag generated for this input');
      // return
    }
    return tagProps
  }

  return (
    <div className="tags">
        {
          tags.map((tag,index)=> {
          const tagProps = generateTagProps(tag,index);
          const {className,onClick,isActive,dataAction} = tagProps;
           return (
            <span key={index} className={className} onClick={(e)=>{console.log(e)}} isActive={isActive} data-action={dataAction}>{tag}</span>
           )
          })
        }
         
    </div>
  );
}


// {/* <span className="tag is-danger">
// {/* {tag.name} */}
// {/* <button className="delete is-small" onClick={() => onDelete(tag.id)} /> */}
// // </span> */}

// {/* {tags.map((tag, index) => (
//         <span key={index} className="tag is-success">
//           {tag.name}
//           <button className="delete is-small" onClick={() => onDelete(tag.id)} />
//         </span>
//       ))} */}