import { StarOutlined } from '@ant-design/icons';
import { Card } from "antd";
const { Meta } = Card;

export const PokemonCard = ({name, imagen}) => {
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
      <Meta description="fire, magic" />
    </Card>
  );
};
