import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilteredPokemons } from "../slices/dataSlice";


export const Searcher = () => {
    const dispatch = useDispatch();
 

  const handleSearch = (value) => {
    dispatch(setFilteredPokemons(value));
  };

  return (
    <>
      <Input.Search
        placeholder="Buscar..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};
