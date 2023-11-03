import { SET_POKEMONS } from "../actions/types"

const inicialState = {
    pokemons : [],
}
export const pokeReducer = (state = inicialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons:action.payload };
            default:
                return state;
    }
}