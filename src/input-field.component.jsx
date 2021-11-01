import React, { useState, useEffect } from "react";

export default function InputField({ handleSubmit }) {
  const [item, setItem] = useState(()=>"");
  const [input, setInput] = useState(()=>"");

  useEffect(() => {
    if (item.length > 0) {
      handleSubmit(item);
      setInput("");
    }
  }, [item]);

  return (
    <div className="field is-grouped">
      <div className="field">
        <label className="label">Item</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Item to add to the list."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <span className="icon is-left">
            <i className="rbc-icon lock"></i>
          </span>
        </div>
      </div>
      <div className="buttons">
        <button
          className="is-primary is-rounded is-fullwidth button"
          type="submit"
          onClick={() => {
            setItem(input);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
