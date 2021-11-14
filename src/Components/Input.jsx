import React from 'react';

const Input = ({onChange,item,value}) => {
    return (
        <div className="field">
            <label className="label">Item</label>
            <input 
                className="input"
                name="itemName"
                type="text"
                value={value}
                placeholder="Item to add to the list."
                onChange={e=>onChange(e)}
            />
        </div>

    )
}

export default Input
