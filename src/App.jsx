import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Col } from "antd";
import { Searcher } from "./Componente/Searcher";
import { PokemonList } from "./Componente/PokemonList";
import { getPokemon } from "./api";
import { setPokemons as setPokemonsActions } from "./actions/index";

function App({ pokemons, setPokemons }) {
 console.log(pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({  
    pokemons: state.pokemons,  
});

const mapDispatchToProps = (dispatch) => ({
  
  setPokemons: (value) => dispatch(setPokemonsActions(value))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
