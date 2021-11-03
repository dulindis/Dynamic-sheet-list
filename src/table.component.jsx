import React, { useState } from "react";

export default function Table({ tags, onDelete }) {

// const [tableTagList, updateTableTagList] = useState([]);

  return (
    <table className="table is-hoverable">
      <thead>
        <th>
          <abbr title="Id">Id</abbr>
        </th>
        <th>
          <abbr title="Name">Name</abbr>
        </th>
      </thead>
      <tbody>
        {
            tags.map((tag,index)=>(
                <tr key={index} onClick={() => onDelete(tag.id)}>
                    <th>{tag.id}</th>
                    <td>{tag.name}</td>
                </tr>
            ))
        }
        
      </tbody>
    </table>
  );
}
