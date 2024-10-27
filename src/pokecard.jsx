import React from "react";
import './pokecard.css'

function Pokecard(props) {
  return (
    <div className="pokecard">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>Type: {props.type}</p>
    </div>
  );
}

function Pokedex() {
  const pokemonData = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div className="pokecard-list">
        {pokemonData.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            image={pokemon.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
