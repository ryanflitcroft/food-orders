import { useState } from 'react';

export default function useAppState() {
  const [entreeId, setEntreeId] = useState(0);
  const [sideId, setSideId] = useState(0);
  const [drinkId, setDrinkId] = useState(0);
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);

  const [menu, setMenu] = useState({
    entree: {
      1: 'Pad Thai',
      2: 'Plantain Bowl',
      3: 'Philly Cheese Steak',
      4: 'Jackfruit Bowl',
      5: 'Brussels Bowl',
      6: 'Wet Burrito',
      7: 'Impossible Burger',
      8: 'Açaí Bowl',
      9: 'Totchos'
    },
    drink: {
      1: 'Mojito',
      2: 'Special: Northern Lights',
      3: 'Bloody Mary',
      4: 'Margarita',
      5: 'Thai Iced Tea',
      6: 'Cold Brew Coffee',
      7: 'Oat Mocha'
    },
    dessert: {
      1: 'Cupcake for 2',
      2: 'Neapolitan Cake',
      3: 'Portland Cream',
      4: 'Tiramisù Donut'
    }
  });

  return {
    entreeId, setEntreeId,
    sideId, setSideId,
    drinkId, setDrinkId,
    orderName, setOrderName,
    instructions, setInstructions, 
    menu, setMenu
  };
}