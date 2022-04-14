import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import NavBar from './components/layout/NavBar';
import DarkModeBtn from './components/layout/DarkModeBtn';
import Pokemons from './components/pokemons/Pokemons';
import './App.scss';

const App = () => {
  useEffect(()=>{
    M.AutoInit();
  });

  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Pokemons />
        <DarkModeBtn /> 
      </div>
    </Fragment>
  );
}

export default App;
