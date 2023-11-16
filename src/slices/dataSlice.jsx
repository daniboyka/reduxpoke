import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLogging } from "./uiSlice";

const initialState = {
  pokemons: [],  
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    "data/fetchPokemonsWithDetails",
    async (_, {dispatch}) => {        // dispatch de lodde  
      dispatch(setLogging(true))      
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
          pokemonsRes.map((urlDetai) => getPokemonDetails(urlDetai))
        );       
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLogging(false))  
    }
)

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorito: (state, action) => {
      const actualPokemonImdex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (actualPokemonImdex >= 0) {
        const estaEnFavorito = state.pokemons[actualPokemonImdex].favorite;
        state.pokemons[actualPokemonImdex].favorite = !estaEnFavorito;
      }
    },   
  },
});

export const { setFavorito, setPokemons } = dataSlice.actions
export default dataSlice.reducer
