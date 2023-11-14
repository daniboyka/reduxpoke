import { fromJS, get, getIn, setIn } from "immutable";
import { SET_FAVORITO, SET_LOGGIN, SET_POKEMONS } from "../actions/types";

// usamos "IMMUTABLE"
// con un set modifico en state, con get me traigo ese state
const inicialState = fromJS({
  pokemons: [],
  loading: false,
});
export const pokeReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      // Con IMMUTABLE asi se accede
      return setIn(state, ["pokemons"], fromJS(action.payload));

    case SET_FAVORITO:
      // const copiaStadoPokemons = [ ...state.pokemons ]; con IMMUTABLE no es necesario hacer una copia del state. IMMUTABLE se encarga de asegurar esa inmutabilidad
      //IMMUTABLE tiene sus propios metodos, como el findIndex, map, etc...
      const actualPokemonImdex = get(state, "pokemons").findIndex((pokemon) => {
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
      const estaEnFavorito = getIn(state, [
        "pokemons",
        actualPokemonImdex,
        "favorite"
      ]);

      //--------------------------------------------------------------------------------------------------
      // ESTO LO REEMPLAZO CON
      // [actualPokemonImdex].favorite =
      // !copiaStadoPokemons[actualPokemonImdex].favorite;
      // return { ...state, pokemons: copiaStadoPokemons }
      return setIn(state, ["pokemons", actualPokemonImdex, "favorite"],!estaEnFavorito);

    case SET_LOGGIN:
      return setIn(state, ["loading"], fromJS(action.payload));
   

    default:
      return state;
  }
};

// return setIn(state, ["pokemons", actualPokemonImdex, "favorite"], !getIn(state, ["pokemons", actualPokemonImdex, "favorite"]));
