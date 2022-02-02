import React from 'react';

export default function OrderInput({ handleChange }) {
  return (
    <>
      <input type="text" placeholder="Order Name" onChange={(e) => handleChange(e.target.value)}></input>
    </>
  );
}
