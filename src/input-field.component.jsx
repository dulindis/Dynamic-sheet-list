import React, { useState } from "react";

export default function InputField({currentList, onClick}) {
  let textInput = React.createRef();

  return (
    <div className="field is-grouped">
        <div class="field">
            <label class="label">Item</label>
            <div class="control has-icons-left">
                <input class="input" ref={textInput} type="text" placeholder="Item to add to the list."/>
                <span class="icon is-left">
                <i class="rbc-icon lock"></i>
                </span>
            </div>
        </div>
        <div class="buttons">
            <button class="is-primary is-rounded is-fullwidth button"  onClick={()=>{onClick(textInput.current.value); textInput.current.value=""}}>Add</button>
        </div> 
    </div>
  );
}

