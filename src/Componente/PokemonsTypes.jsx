// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredPokemonsByType } from "./../slices/dataSlice";
import { Col, Flex, Row, Select, Typography  } from "antd";
const { Title } = Typography;


export const PokemonTypesSelect = () => {
  const allTypes = useSelector((state) => state.data.pokemons);

  const dispatch = useDispatch();

  const typesSet = new Set();
  allTypes.forEach((pokemon) => {
    pokemon.types.forEach((nametype) => {
      typesSet.add(nametype.type.name);
    });
  });

  const uniqueTypes = Array.from(typesSet); // Convertir Set a Array

  const handleTypeChange = (value) => {
    dispatch(setFilteredPokemonsByType(value));
  };
  return (
<div className="container-pokemonsTypes">
  <Flex justify="space-between" align="'flex-start">
    <Title level={4} style={{ paddingLeft: '5px', paddingRight: '6px', marginTop: '-0px' }}>Selecciona un tipo de Pokémon:</Title>
    <Select
      id="types"
      showSearch
      placeholder="Seleccione el tipo"
      onChange={handleTypeChange}
    >
      <Select.Option value="all">Todos los tipos</Select.Option>
      {uniqueTypes.map((type, index) => (
        <Select.Option key={index} value={type}>
          {type}
        </Select.Option>
      ))}
    </Select>
  </Flex>
</div>  );
};