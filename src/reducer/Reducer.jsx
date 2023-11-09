import { fromJS } from "immutable";
import { SET_FAVORITO, SET_POKEMONS } from "../actions/types";

// usamos "IMMUTABLE"
// con un set modifico en state, con get me traigo ese state
const inicialState = fromJS({
  pokemons: [],
});
export const pokeReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      // Con IMMUTABLE asi se accede
      return state.setIn(["pokemons"], fromJS(action.payload));

    case SET_FAVORITO:
      // const copiaStadoPokemons = [ ...state.pokemons ]; con IMMUTABLE no es necesario hacer una copia del state. IMMUTABLE se encarga de asegurar esa inmutabilidad
      //IMMUTABLE tiene sus propios metodos, como el findIndex, map, etc...
      const actualPokemonImdex = state.get("pokemons").findIndex((pokemon) => {
        return pokemon.get("id") === action.payload.pokemonId;
      });
      if (actualPokemonImdex < 0) {
        return state;
      }

      //--------------------------------------------------------------------------------------------------
      //ESTO ES LO MISMO QUE...
      // const estaEnFavorito= state.get("pokemons").get
      // (actualPokemonImdex).get("favorite")
      // HACER ESTO
      const estaEnFavorito = state.getIn([
        "pokemons",
        actualPokemonImdex,
        "favorite",
      ]);
      //--------------------------------------------------------------------------------------------------
      // ESTO LO REEMPLAZO CON
      // [actualPokemonImdex].favorite =
      // !copiaStadoPokemons[actualPokemonImdex].favorite;
      // return { ...state, pokemons: copiaStadoPokemons }
      return state.getIn([
        "pokemons",
        actualPokemonImdex,
        "favorite"],
        !estaEnFavorito
      );

    default:
      return state;
  }
};
