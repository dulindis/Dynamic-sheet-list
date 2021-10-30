import React, { useState } from "react";

export default function InputField({currentList, onClick}) {
    
  return (
    <div className="field is-grouped">
        <div class="field">
            <label class="label">Item</label>
            <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Item to add to the list."/>
                <span class="icon is-left">
                <i class="rbc-icon lock"></i>
                </span>
            </div>
        </div>
        <div class="buttons">
            <button class="is-primary is-rounded is-fullwidth button"  onClick={()=>onClick('new iem added')}>Add</button>
        </div> 
    </div>
  );
}

