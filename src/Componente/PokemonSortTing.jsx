import { useDispatch, useSelector } from "react-redux";
import { orderBy } from "./../slices/dataSlice";

export const PokemonSorting = () => {
  const dispatch = useDispatch();
  const orderByName = useSelector((state) => state.orderByName.orderByName);
  console.log()

  const handleOrderByName = (order) => {
    dispatch(orderBy(order));
  };

  return (
    <div className="sorting-options">
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
    </div>
  );
};