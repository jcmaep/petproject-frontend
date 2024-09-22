import React from 'react';

export const SortOptions = () => {
  return (
    <div className="sort-options">
      <button className="sort-button">Top</button>
      <button className="sort-button">New</button>
      <select className="sort-select">
        <option value="">Select Category</option>
        <option value="category1">General</option>
        <option value="category2">Discussion</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  )
}

export default SortOptions;
