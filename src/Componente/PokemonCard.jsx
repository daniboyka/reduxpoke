import { StarOutlined } from '@ant-design/icons';
import { Card } from "antd";
const { Meta } = Card;

export const PokemonCard = ({name, imagen, obtenerHabilidades, types, abilities}) => {
 
  return (
    <Card    
      title={name}
      cover={
        <img
          src={imagen}
          alt={name}
        />
      }
      extra={<StarOutlined/>}
    >
      <span>Types:</span>
      <ul>
          {types.map((tipe) => (
            <li key={tipe.type.name}>{tipe.type.name}</li>
          ))}
        </ul>

      <samp>habilidad:</samp>
      <Meta description={
        
        <ul>
          {abilities.map((habilidad) => (
            <li key={habilidad.ability.name}>{habilidad.ability.name}</li>
          ))}
        </ul>
      } />
    </Card>
  );
};
