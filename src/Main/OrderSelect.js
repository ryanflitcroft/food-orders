import React from 'react';

export default function OrderSelect({ handleChange, 
  type, 
  options }) {

  return (
    <>
      <label htmlFor={type}>{type} Menu</label>
      <select onChange={(e) => handleChange(e.target.value)}>
        {options.map((option, i) =>
          <option key={option, i} value={i + 1}>{option}</option>
        )}
      </select>
    </>
  );
}
