import React from 'react';

export default function OrderImages({ entreeId,
  sideId,
  drinkId, 
  menu }) {

  return (
    <section>
      <figure>
        <img src={!entreeId ? '../../assets/default.JPG' : `../../assets/entree-${entreeId}.JPG`} alt={menu.entree[ entreeId ]} />
        <figcaption>
          {menu.entree[ entreeId ]}
        </figcaption>
      </figure>

      <figure>
        <img src={!drinkId ? '../../assets/default.JPG' : `../../assets/drink-${drinkId}.JPG`} alt={menu.drink[ drinkId ]} />
        <figcaption>
          {menu.drink[ drinkId ]}
        </figcaption>
      </figure>

      <figure>
        <img src={!sideId ? '../../assets/default.JPG' : `../../assets/side-${sideId}.JPG`} alt={menu.dessert[ sideId ]} />
        <figcaption>
          {menu.dessert[ sideId ]}
        </figcaption>
      </figure>
    </section>
  );
}
