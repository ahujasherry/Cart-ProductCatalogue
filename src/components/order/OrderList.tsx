import { useProductsContext } from "../../hooks/useProductsContext";
import { OrderListItem } from "./OrderListItem";

export const OrderList = () => {
  const { state } = useProductsContext();

  return (
    <ul className="space-y-4">
      {Object.values(state.selectedProducts).map((dessert) => (
        <OrderListItem {...dessert} key={dessert.id} />
      ))}
    </ul>
  );
};
