import { SET_FAVORITO, SET_POKEMONS } from "../actions/types";

const inicialState = {
  pokemons: [],
};
export const pokeReducer = (state = inicialState, action) => {  
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case SET_FAVORITO:
        const copiaStadoPokemons = [ ...state.pokemons ];       
        const actualPokemonImdex = copiaStadoPokemons.findIndex(
          (pokemon) => {
           return pokemon.id === action.payload.pokemonId
        })
        if(actualPokemonImdex < 0) {
          return state
        }
        copiaStadoPokemons[actualPokemonImdex].favorite =
        !copiaStadoPokemons[actualPokemonImdex].favorite;
        
        return { ...state, pokemons: copiaStadoPokemons }

    default:
      return state;
  }
};
