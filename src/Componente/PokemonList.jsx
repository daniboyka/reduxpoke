import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons, pokemonsFiltrados }) => {
  const steateDePokemonsARenderizar =
  pokemonsFiltrados.length > 0 ? pokemonsFiltrados : pokemons;



  return (
    <div className="PokemonList">    
        {steateDePokemonsARenderizar?.map((pokemon) => {
          return (
            <PokemonCard
              name={pokemon.name}
              id={pokemon.id}
              imagen={pokemon.sprites.front_default}
              types={pokemon.types}
              abilities={pokemon.abilities}
              favorite={pokemon.favorite}
              key={pokemon.name}
            />
          );
        })};
    </div>
  );
};
