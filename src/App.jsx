import { useEffect } from "react";
import { getIn } from "immutable";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import { Searcher } from "./Componente/Searcher";
import { PokemonList } from "./Componente/PokemonList";
// import { getPokemon } from "./api";
// import { getLogin, getPokemonsWithDetail } from "./actions/index";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./App.css";

function App() {
  // con .toJS() transformamos ese tipo de dato distinto q nos da immutable y lo pasa a JS pa no tener q andar agregando .get() a todo
  // const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  // SHALLOWEQUAL es como una comparacion extricta que compara si es un objeto === immutable
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const pokemonsFiltrados = useSelector((state) => state.data.filteredPokemons, shallowEqual); 
  //  => getIn(state, ['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector((state) => state.ui.loading);
  //  => Boolean(state.getIn(['ui','loading'])));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img
          src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"
          alt="logo"
        />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} pokemonsFiltrados={pokemonsFiltrados}/>
      )}
    </div>
  );
}

export default App;
