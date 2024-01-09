// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredPokemonsByType } from "./../slices/dataSlice";
import { Col, Row } from "antd";

export const PokemonTypesSelect = () => {
  const dispatch = useDispatch();
//   const types = useSelector((state) => state.data.types);
  const allTypes = useSelector((state) => state.data.pokemons);
  const typeInicial = useSelector((state) => state.data.selectedType);
  
//   const typesList = allTypes.map((pokemon) =>
//     pokemon.types.map((nametype) => nametype.type.name)
//   );

  const typesSet = new Set();
  allTypes.forEach((pokemon) => {
    pokemon.types.forEach((nametype) => {
      typesSet.add(nametype.type.name);
    });
  });

  const uniqueTypes = Array.from(typesSet); // Convertir Set a Array

  //   useEffect(() => {
  //     // Simula una lista de tipos de Pokémon
  //     const typesList = allTypes.map((pokemon) => (
  //         pokemon.types.map((nametype) => (
  //           nametype.type.name
  //         ))
  //       ))
  //     }, []);
  //     dispatch(setPokemonTypes(typesList)); // Guardar los tipos en el estado
  //   }, [dispatch]);

  const handleTypeChange = (e) => {
    dispatch(setFilteredPokemonsByType(e.target.value)); // Filtrar los Pokémon por el tipo seleccionado
  };    

  return (
    <div className="container-pokemonsTypes">
      <Row justify="start">
        <Col span={8} offset={2}>
          <Row align="middle">
            <Col flex="100px">
              <label htmlFor="types">Selecciona un tipo de Pokémon:</label>
            </Col>
            <Col flex="auto">
              <select id="types" onChange={handleTypeChange}>
                <option value="all">Todos los tipos</option>
                {uniqueTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
