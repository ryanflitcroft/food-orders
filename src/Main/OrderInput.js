import React from 'react';

export default function OrderInput({ setOrderName }) {
  return (
    <>
      <input type="text" placeholder="Order Name" onChange={(e) => setOrderName(e.target.value)} required />
    </>
  );
}
