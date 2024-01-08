import { shallowEqual, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";


export const PokemonList = ({ pokemons, pokemonsFiltrados }) => {
  const filterValue = useSelector((state) => state.data.filterValue, shallowEqual);
  const type = useSelector((state) => state.data.selectedType, shallowEqual);
  const pokeTypes = useSelector((state) => state.data.PokeType, shallowEqual);
  
  
  let pokemonsToRender;

 
  if (filterValue && filterValue.trim() !== '') {
    pokemonsToRender = pokemonsFiltrados.filter(pokemon => 
      pokemon.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  } else {
    pokemonsToRender = pokemonsFiltrados.length > 0 ? pokemonsFiltrados : pokemons;
  }

  if (type !== 'all' && pokeTypes.length > 0) {
    pokemonsToRender = pokemonsToRender.filter(pokemon => 
      pokemon.types.some(p => p.type.name === type)
    );
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
        <p>No existen Pokémon que coincidan con los filtros seleccionados</p>
      )}
    </div>
  );
};