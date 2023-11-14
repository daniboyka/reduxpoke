import { useEffect } from "react";
import { get } from"immutable";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Col, Spin } from "antd";
import { Searcher } from "./Componente/Searcher";
import { PokemonList } from "./Componente/PokemonList";
import { getPokemon } from "./api";
import { getLogin, getPokemonsWithDetail } from "./actions/index";

function App() {
  // con .toJS() transformamos ese tipo de dato distinto q nos da immutable y lo pasa a JS pa no tener q andar agregando .get() a todo
  // const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const pokemons = useSelector(state => get(state, 'pokemons')).toJS();
  const loading = useSelector(state => get(state, 'loading'));


  const dispatch = useDispatch();

  

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getLogin(true))
      dispatch(getPokemonsWithDetail(pokemonsRes));
      dispatch(getLogin(false))
    };
    fetchPokemons();
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
      {loading ? <Col offset={12}>
      <Spin spinning size="large" />      
      </Col> : <PokemonList pokemons={pokemons} />}    
    </div>
  );
}

export default App;
