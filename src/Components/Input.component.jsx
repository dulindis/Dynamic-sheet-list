import React from 'react';

const Input = ({onChange,value, placeholder = 'write your input'}) => {


    
    return (
        <div className="field">
            {/* <label className="label">Item</label> */}
            <input 
                className="input"
                name="name"
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={e=>onChange(e)}
            />
        </div>

    )
}

export default Input
