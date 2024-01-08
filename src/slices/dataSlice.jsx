import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLogging } from "./uiSlice";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  vacio:[],
};

//PROBAR HACER UN UseEffect q dispatch(setFilteredPokemons) cuando los pokemones se seteen en el state pokemon

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLogging(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((urlDetai) => getPokemonDetails(urlDetai))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLogging(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {     
      state.pokemons = action.payload;
    },
    setFilteredPokemons: (state, action) => {
      const filterValue = action.payload;
  if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) {
    // Si el valor de filtrado no está definido o es un array vacío, mostrar todos los Pokémon si están disponibles
    state.filteredPokemons = state.pokemons; // Mostrar todos los Pokémon
  } else {
    const buscadorDeLetra = filterValue.toLowerCase();
    state.filteredPokemons = state.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(buscadorDeLetra)
    );
  }
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
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },

  },
});

export const { setFavorito, setPokemons, setFilteredPokemons, setFilterValue } =
  dataSlice.actions;
export default dataSlice.reducer;
