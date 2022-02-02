import React from 'react';
import OrderImages from './OrderImages';

export default function Main({ entreeId,
  setEntreeId,
  sideId,
  setSideId,
  drinkId,
  setDrinkId,
  orderName,
  setOrderName,
  instructions,
  setInstructions }) {
  return (
    <main>
      <OrderImages entreeId={entreeId} 
        sideId={sideId}
        drinkId={drinkId} />
    </main>
  );
}
