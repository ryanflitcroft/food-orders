import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  const [entreeId, setEntreeId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);
  
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>

  );
}

export default App;
