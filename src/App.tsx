import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import './App.css';

const App = () => {
  useEffect(()=>{
    M.AutoInit();
  });
  return (
    <div className="App">
      PokeDex
    </div>
  );
}

export default App;
