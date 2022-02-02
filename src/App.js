import './App.css';
import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import useAppState from './useAppState';

function App() {
  const {
    entreeId, setEntreeId,
    sideId, setSideId,
    drinkId, setDrinkId,
    orderName, setOrderName,
    instructions, setInstructions,
    menu
  } = useAppState();

  return (
    <>
      <Header />
      <Main entreeId={entreeId} setEntreeId={setEntreeId}
        sideId={sideId} setSideId={setSideId}
        drinkId={drinkId} setDrinkId={setDrinkId}
        orderName={orderName} setOrderName={setOrderName}
        instructions={instructions} setInstructions={setInstructions} 
        menu={menu} />
      <Footer />
    </>

  );
}

export default App;