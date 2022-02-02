import React from 'react';
import OrderImages from './OrderImages';
import OrderForm from './OrderForm';

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
      <h2>Order for {orderName}</h2>
      <OrderImages entreeId={entreeId} 
        sideId={sideId}
        drinkId={drinkId} 
        menu={menu} />
      <OrderForm setEntreeId={setEntreeId}
        setSideId={setSideId}
        setDrinkId={setDrinkId}
        setOrderName={setOrderName}
        setInstructions={setInstructions}
        instructions={instructions} />
    </main>
  );
}
