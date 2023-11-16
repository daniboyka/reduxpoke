// import { combineReducers } from "redux"  <-------- esto tendria que usar nomas si no usara immutable, como la uso instalo una libreria llamada npm i redux-immutable
// import { combineReducers } from "redux-immutable"
// import { pokeReducer } from "./Reducer"
// import { uiReducer } from "./ui"

import { combineReducers } from "redux"

import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

export const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
});