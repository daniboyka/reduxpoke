import { Input, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { setFilteredPokemons, setFilterValue } from "../slices/dataSlice";
import { PokemonTypesSelect } from "./PokemonsTypes";
import { PokemonSorting } from "./PokemonSortTing";

export const Searcher = () => {
  const dispatch = useDispatch();

  // const handleSearch = (value) => {
  //       const filterValue = value.trim(); // Eliminar espacios en blanco al inicio y al final

  //   if (filterValue === "") {
  //     // Si el campo está vacío, mostrar todos los Pokémon
  //     dispatch(setFilteredPokemons([])); // o dispatch(setFilteredPokemons(pokemons)) donde pokemons son todos los Pokémon sin filtrar
  //   } else {
  //     dispatch(setFilteredPokemons(filterValue));
  //   }
  // };

  const handleSearch = (value) => {
    const filterValue = value.trim();

    if (filterValue === "") {
      dispatch(setFilteredPokemons([]));
    } else {
      dispatch(setFilteredPokemons(filterValue));
    }

    dispatch(setFilterValue(filterValue)); // Guardar filterValue en el estado de Redux
  };

  return (
    <>
      <Row>
      <Col span={3}>
        <PokemonTypesSelect />
        </Col>
        <Col  span={17}>
        <Input.Search
          placeholder="Buscar..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        </Col>
        <Col span={3}>
        <PokemonSorting />
        </Col>
      </Row>
    </>
  );
};
