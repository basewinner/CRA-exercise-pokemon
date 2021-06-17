import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


/** Index of Pokemon: show individual cards. */



const Pokedex = ({ cards }) => {
 
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {cards.map(p => (
          <Pokecard
            key = {p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.exp}
          />
        ))}
      </div>    
    </div>
  );
}


export default Pokedex;
