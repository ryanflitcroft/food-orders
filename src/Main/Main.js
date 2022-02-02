import React from 'react';
import OrderImages from './OrderImages';
import OrderForm from './OrderForm';
import InstructionsList from './InstructionsList';

export default function Main({ entreeId,
  setEntreeId,
  sideId,
  setSideId,
  drinkId,
  setDrinkId,
  orderName,
  setOrderName,
  instructions,
  setInstructions, 
  menu }) {
  return (
    <main>
      <h1>🌱 Order Form 🌿</h1>
      <OrderImages entreeId={entreeId} 
        sideId={sideId}
        drinkId={drinkId} 
        menu={menu} />
      <h2>Order for: {orderName}</h2>
      <div>
        <OrderForm setEntreeId={setEntreeId}
          setSideId={setSideId}
          setDrinkId={setDrinkId}
          setOrderName={setOrderName}
          setInstructions={setInstructions}
          instructions={instructions} />
        <InstructionsList instructions={instructions} />
      </div>

    </main>
  );
}
