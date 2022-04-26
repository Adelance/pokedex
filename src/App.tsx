import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import NavBar from './components/layout/NavBar';
import DarkModeBtn from './components/layout/DarkModeBtn';
import Pokemons from './components/pokemons/Pokemons';
import ViewPokemonModal from './components/pokemons/ViewPokemonModal';
import Footer from './components/layout/Footer';
import { store } from './store';
import { Provider } from 'react-redux';
import './App.scss';

const App = () => {
  useEffect(()=>{
    M.AutoInit();
  }, []);

  return (
    <Provider store = {store}>
      <Fragment>
        <NavBar />
        <div className="container">
          
          <Pokemons />
          <DarkModeBtn /> 
          <ViewPokemonModal />
        </div>
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
