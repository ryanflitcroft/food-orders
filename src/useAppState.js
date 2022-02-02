import { useState } from 'react';

export default function useAppState() {
  const [entreeId, setEntreeId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
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