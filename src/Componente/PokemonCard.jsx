import { Card } from "antd";
import { StarButton } from "./StarButton/index";
import { useDispatch } from "react-redux";
import { setFavorito } from "../actions";
const { Meta } = Card;

export const PokemonCard = ({
  name,
  id,
  imagen,
  favorite,
  obtenerHabilidades,
  types,
  abilities,
}) => {
  const dispatch = useDispatch();

  const manejoDeFavoritos = () =>{
    dispatch(setFavorito({ pokemonId: id }))
  }

  return (
    <Card
      title={name}
      cover={<img src={imagen} alt={name} />}
      extra={
        <StarButton isFavorito={favorite} onClick={manejoDeFavoritos} />
      }
    >
      <span>Types:</span>
      <ul>
        {types.map((tipe) => (
          <li key={tipe.type.name}>{tipe.type.name}</li>
        ))}
      </ul>

      <samp>habilidad:</samp>
      <Meta
        description={
          <ul>
            {abilities.map((habilidad) => (
              <li key={habilidad.ability.name}>{habilidad.ability.name}</li>
            ))}
          </ul>
        }
      />
    </Card>
  );
};
