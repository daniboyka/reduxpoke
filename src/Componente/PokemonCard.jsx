import { StarOutlined } from '@ant-design/icons';
import { Card } from "antd";
const { Meta } = Card;

export const PokemonCard = ({name}) => {
  return (
    <Card    
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="dito"
        />
      }
      extra={<StarOutlined/>}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
