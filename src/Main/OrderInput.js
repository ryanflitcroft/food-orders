import React from 'react';

export default function OrderInput({ setOrderName }) {
  return (
    <>
      <label htmlFor="name">Order Name:</label>
      <input type="text" name="name" placeholder="Order Name" onChange={(e) => setOrderName(e.target.value)} required />
    </>
  );
}