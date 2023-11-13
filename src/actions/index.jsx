import { type } from "@testing-library/user-event/dist/type";
import { getPokemonDetails } from "../api";
import { SET_FAVORITO, SET_LOGGIN, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setFavorito = (payload) => ({
  type: SET_FAVORITO,
  payload,
});

export const getPokemonsWithDetail =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((urlDetai) => getPokemonDetails(urlDetai))
    );
    dispatch(setPokemons(pokemonsDetailed));
  };

  export const getLogin = (payload) => ({
    type: SET_LOGGIN,
    payload,
  })