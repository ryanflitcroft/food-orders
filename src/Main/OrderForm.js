import React from 'react';
import OrderSelect from './OrderSelect';
import OrderInput from './OrderInput';
import OrderInstructions from './OrderInstructions';

export default function OrderForm({ setEntreeId,
  setSideId,
  setDrinkId,
  setOrderName,
  setInstructions,
  instructions }) {

  return (
    <section className="order-form">
      <OrderSelect handleChange={setEntreeId}
        type='Entrée'
        options={['Pad Thai', 'Plantain Bowl', 'Philly Cheese Steak', 'Jackfruit Bowl', 'Brussels Bowl', 'Wet Burrito', 'Impossible Burger', 'Açaí Bowl', 'Totchos']} />
      <OrderSelect handleChange={setDrinkId}
        type='Drink'
        options={['Mojito', 'Special: Northern Lights', 'Bloody Mary', 'Margarita', 'Thai Iced Tea', 'Cold Brew Coffee', 'Oat Mocha']} />
      <OrderSelect handleChange={setSideId}
        type='Dessert'
        options={['Cupcake for 2', 'Neapolitan Cake', 'Portland Cream', 'Tiramisù Donut']} />
      <OrderInput setOrderName={setOrderName} />
      <OrderInstructions instructions={instructions}
        setInstructions={setInstructions} />
    </section>
  );
}
