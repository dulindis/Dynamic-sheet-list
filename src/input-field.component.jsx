import React, {useState} from "react";
// import CustomButton from "./custom-button.component";

export default function InputField({currentList, handleSubmit}) {

  const [item, setItem] = useState('');
  
  return (
    <div className="field is-grouped">
        <div className="field">
            <label className="label">Item</label>
            <div className="control has-icons-left">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Item to add to the list."
                  onChange={event=>setItem(event.target.value)}
                 />
                <span className="icon is-left">
                <i className="rbc-icon lock"></i>
                </span>
            </div>
        </div>
        <div className="buttons">
            <button className="is-primary is-rounded is-fullwidth button"  type='submit' onClick={()=>handleSubmit(item)
              }>Add</button>
        </div> 
    </div>
  );
}

