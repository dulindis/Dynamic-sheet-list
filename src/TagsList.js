import React from "react";

export default function TagsList({ tags, onDelete }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag is-success">
          {tag.name}
          <button className="delete is-small" onClick={() => onDelete(tag.id)} />
        </span>
      ))}
    </div>
  );
}
