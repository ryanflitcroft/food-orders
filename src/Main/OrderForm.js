import React from 'react';
import OrderInput from './OrderInput';

export default function OrderForm({ setEntreeId,
  setSideId,
  setDrinkId,
  setOrderName,
  setInstructions }) {

  return (
    <section>
      <form>
        <OrderInput handleChange={setDrinkId}
          type='drink'
          options={['Mojito', 'Special: Northern Lights', 'Bloody Mary', 'Margarita', 'Thai Iced Tea', 'Cold Brew Coffee', 'Oat Mocha']} />
      </form>
    </section>
  );
}
