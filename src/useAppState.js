import { useState } from 'react';

export default function useAppState() {
  const [entreeId, setEntreeId] = useState(8);
  const [sideId, setSideId] = useState(3);
  const [drinkId, setDrinkId] = useState(2);
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);

  return {
    entreeId, setEntreeId,
    sideId, setSideId,
    drinkId, setDrinkId,
    orderName, setOrderName,
    instructions, setInstructions
  };
}