import React from "react";

export default function CountriesList({ list, onSelect }) {
  return (
    <div className="select is-multiple">
      <select multiple size="8" onChange={e => onSelect(e.target.value)}>
        {list.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
