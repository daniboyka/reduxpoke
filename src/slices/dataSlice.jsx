import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLogging } from "./uiSlice";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  PokeType: [],
  selectedType: "all",
  filterValue: "",
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
      if (
        !filterValue ||
        (Array.isArray(filterValue) && filterValue.length === 0)
      ) {
        // Si el valor de filtrado no está definido o es un array vacío, mostrar todos los Pokémon si están disponibles
        state.filteredPokemons = state.pokemons; // Mostrar todos los Pokémon
      } else {
        const buscadorDeLetra = filterValue.toLowerCase();
        state.filteredPokemons = state.pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(buscadorDeLetra)
        );
      }
    },

    setFilteredPokemonsByType: (state, action) => {
      state.selectedType = action.payload; // Guarda el tipo seleccionado en el estado
      if (action.payload === "all") {
        state.PokeType = state.pokemons; // Si se selecciona 'Todos los tipos', muestra todos los pokemones
      } else {
        state.PokeType = state.pokemons.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === action.payload)
        ); // Filtra los pokemones por el tipo seleccionado
      }
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
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

export const {
  setFavorito,
  setPokemons,
  setFilteredPokemons,
  setFilterValue,
  setFilteredPokemonsByType,
} = dataSlice.actions;
export default dataSlice.reducer;
