import { shallowEqual, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

/// VASI Q ANDAAAA

export const PokemonList = ({ pokemons, pokemonsFiltrados }) => {
  const filterValue = useSelector((state) => state.data.filterValue, shallowEqual);

  let pokemonsToRender;

  if (filterValue && filterValue.trim() !== '') {
    pokemonsToRender = pokemonsFiltrados.length > 0 ? pokemonsFiltrados : [];
  } else {
    pokemonsToRender = pokemons;
  }

  return (
    <div className="PokemonList">
      {pokemonsToRender.length > 0 ? (
        pokemonsToRender.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            id={pokemon.id}
            imagen={pokemon.sprites.front_default}
            types={pokemon.types}
            abilities={pokemon.abilities}
            favorite={pokemon.favorite}
            key={pokemon.name}
          />
        ))
      ) : (
        <p>No existe el Pokémon</p>
      )}
    </div>
  );
};