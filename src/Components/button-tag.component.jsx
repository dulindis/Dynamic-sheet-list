import React, { useState } from "react";


function ButtonTag({type, handleChange}) {


    function generateTagClass(type) {

        let className='';
        
        switch (type) {
          case 'edit':
           className='tag is-success';
            break;
          case 'delete':
            className='tag is-danger';
              break;
          case 'save':
            className='tag is-info';
                break;
        case 'submit':
           className='tag is-primary';
            break;
            default:
          className='tag ';
          // return
        }
        return className
      }
      if (type==='submit')  {
          return (
            <button className={generateTagClass(type)} type={type} onSubmit={handleChange}>{type}</button>
          )
      } else return  (<span className={generateTagClass(type)}  onClick={(e)=>{console.log('etarget from button',e.target, 'this is clicked');
      //  handleChange()
       }} data-action={type}>{type}</span> )
    // return (
    //      { if (type==='submit') ? 
    //         <button className={generateTagClass(type)}  type={type} onClick={()=>handleChange(item)
    //           }>Add</button>
    //                : 
    //         (<span className={generateTagClass(type)}  onClick={(e)=>{console.log(e.target, 'this is clicked');
    //     //  handleChange()
    //      }} data-action={type}>{type}</span> )}
    // )
}

export default ButtonTag


