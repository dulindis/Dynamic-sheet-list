import React, {useState} from "react";

import ButtonTag from './button-tag.component';


export default function InputField({handleSubmit}) {

    const [item, setItem] = useState('');

    return (
      <div className="field is-grouped">
        <form onSubmit={e=>{e.preventDefault();handleSubmit(item)}}>
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
                {/* <ButtonTag type='submit'  handleChange={handleSubmit}>Add item to the list</ButtonTag> */}
                <button className="is-primary is-rounded is-fullwidth button"  type='submit' >Add</button>
            </div> 
        </form>
          
      </div>
    );
  }
  
  