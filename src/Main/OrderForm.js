import React from 'react';
import OrderSelect from './OrderSelect';
import OrderInput from './OrderInput';

export default function OrderForm({ setEntreeId,
  setSideId,
  setDrinkId,
  setOrderName,
  setInstructions }) {

  return (
    <section>
      <form>
        <OrderInput handleChange={setOrderName} />
        <OrderSelect handleChange={setEntreeId}
          type='Entrée'
          options={['Pad Thai', 'Plantain Bowl', 'Philly Cheese Steak', 'Jackfruit Bowl', 'Brussels Bowl', 'Wet Burrito', 'Impossible Burger', 'Açaí Bowl', 'Totchos']} />
        <OrderSelect handleChange={setDrinkId}
          type='Drink'
          options={['Mojito', 'Special: Northern Lights', 'Bloody Mary', 'Margarita', 'Thai Iced Tea', 'Cold Brew Coffee', 'Oat Mocha']} />
        <OrderSelect handleChange={setSideId}
          type='Dessert'
          options={['Cupcake for 2', 'Neapolitan Cake', 'Portland Cream', 'Tiramisù Donut']} />
      </form>
    </section>
  );
}
