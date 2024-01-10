import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { orderBy } from "./../slices/dataSlice";
import { Row } from "antd";

export const PokemonSorting = () => {
  const dispatch = useDispatch();
  const orderByName= useSelector((state) => state.data.orderByName, shallowEqual);
  console.log("orderByName<<<<<<<",orderByName)

  const handleOrderByName = (order) => {
    console.log("order<<<<<<<<",order)
    dispatch(orderBy(order));
  };

  return (
    <div className="sorting-options">
      <Row>
      <button
        className={`sorting-button ${orderByName === "AZ" ? "active" : ""}`}
        onClick={() => handleOrderByName("AZ")}
      >
        A-Z
      </button>
      <button
        className={`sorting-button ${orderByName === "ZA" ? "active" : ""}`}
        onClick={() => handleOrderByName("ZA")}
      >
        Z-A
      </button>
      </Row>
    </div>
  );

};