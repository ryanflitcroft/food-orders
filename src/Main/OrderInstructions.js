import React from 'react';
import { useState } from 'react';

export default function OrderInstructions({ instructions,
  setInstructions }) {

  const [instructionInput, setInstructionInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInput]);
    setInstructionInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="intructions">Special Instructions:</label>
      <input type="text" placeholder="Instruction" name ="instructions" onChange={(e) => setInstructionInput(e.target.value)} value={instructionInput}/>
      <button type="submit">Submit Order</button>
    </form>
  );
}