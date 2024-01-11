import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { orderBy } from "./../slices/dataSlice";
import { Button, Row,   Typography, Flex  } from "antd";
const { Title } = Typography;

export const PokemonSorting = () => {
  const dispatch = useDispatch();
  const orderByName= useSelector((state) => state.data.orderByName, shallowEqual);
  
  const handleOrderByName = (order) => {
       dispatch(orderBy(order));
  };

  return (
    <div className="sorting-options" style={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '-0px' }}>
      <Row>
      <Flex gap="small" wrap="wrap">
      <Title level={4} style={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '-0px' }}>Ordenar por :</Title>
      <Button
       style={{ paddingTop: '1px' }}
      type="primary" shape="round" size={"large"}  
        className={`sorting-button ${orderByName === "AZ" ? "active" : ""}`}
        onClick={() => handleOrderByName("AZ")}
      >
        A-Z
      </Button>
     
      <Button
      style={{ paddingTop: '1px' }}
        type="primary" shape="round" size={"large"}  
        className={`sorting-button ${orderByName === "ZA" ? "active" : ""}`}
        onClick={() => handleOrderByName("ZA")}
      >
        Z-A
      </Button>
      </Flex>
      </Row>
    </div>
  );

};