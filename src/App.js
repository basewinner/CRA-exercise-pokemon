import React from "react";
import Pokedex from "./Pokedex";
import cards from './cards';


function App() {
  return (
    <div className="App">
      <Pokedex cards = {cards} />
    </div>
  );
}

export default App;
