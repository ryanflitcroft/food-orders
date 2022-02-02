import React from 'react';
import { useState } from 'react';

export default function OrderInstructions({ instructions,
  setInstructions }) {
  console.log('||', instructions);
  const [instructionInput, setInstructionInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
    console.log('||', instructions);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Special Instructions" name ="instructions" onChange={(e) => setInstructionInput(e.target.value)} value={instructionInput}/>
      <button type="submit">Submit Order</button>
    </form>
  );
}
