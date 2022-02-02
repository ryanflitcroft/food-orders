import React from 'react';

export default function OrderImages({ entreeId,
  sideId,
  drinkId }) {

  function handleFigure(type, id) {
    return (type === 'drink' ? (!id ? 'Drink Menu' : id === 1 ? 'Mojito' : id === 2 ? 'Special: Northern Lights' : id === 3 ? 'Bloody Mary' : id === 4 ? 'Margarita' : id === 5 ? 'Thai Iced Tea' : id === 6 ? 'Cold Brew Coffee' : id === 7 ? 'Oat Mocha' : '') 
      : type === 'entree' ? (!id ? 'Entree Menu' : id === 1 ? 'Pad Thai' : id === 2 ? 'Plantain Bowl' : id === 3 ? 'Philly Cheese Steak' : id === 4 ? 'Jackfruit Bowl' : id === 5 ? 'Brussels Bowl' : id === 6 ? 'Wet Burrito' : id === 7 ? 'Impossible Burger' : id === 8 ? 'Açaí Bowl' : id === 9 ? 'Totchos' : '') 
        : type === 'side' ? (!id ? 'Dessert Menu' : id === 1 ? 'Cupcake for 2' : id === 2 ? 'Neapolitan cake' : id === 3 ? 'Portland Cream' : id === 4 ? 'Tiramisu Donut' : '') : '');
  }

  return (
    <section>
      <figure>
        <img src={!entreeId ? '../../assets/default.JPG' : `../../assets/entree-${entreeId}.JPG`} alt={handleFigure('entree', entreeId)} />
        <figcaption>
          {handleFigure('entree', entreeId)}
        </figcaption>
      </figure>

      <figure>
        <img src={!drinkId ? '../../assets/default.JPG' : `../../assets/drink-${drinkId}.JPG`} alt={handleFigure('drink', drinkId)} />
        <figcaption>
          {handleFigure('drink', drinkId)}
        </figcaption>
      </figure>

      <figure>
        <img src={!sideId ? '../../assets/default.JPG' : `../../assets/side-${sideId}.JPG`} alt={handleFigure('side', sideId)} />
        <figcaption>
          {handleFigure('side', sideId)}
        </figcaption>
      </figure>
    </section>
  );
}
