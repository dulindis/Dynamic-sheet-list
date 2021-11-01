import React from "react";

export default function InputField({currentList, onClick}) {
  let textInput = React.createRef();

  return (
    <div className="field is-grouped">
        <div className="field">
            <label className="label">Item</label>
            <div className="control has-icons-left">
                <input className="input" ref={textInput} type="text" placeholder="Item to add to the list."/>
                <span className="icon is-left">
                <i className="rbc-icon lock"></i>
                </span>
            </div>
        </div>
        <div className="buttons">
            <button className="is-primary is-rounded is-fullwidth button"  type='submit' onClick={()=>{onClick(textInput.current.value); textInput.current.value=""}}>Add</button>
        </div> 
    </div>
  );
}

