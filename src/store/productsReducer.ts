import { DessertData } from "../types/dessert";

export type Product = DessertData & {
  quantity: number;
};
export type State = {
  selectedProducts: Record<number, Product>;
  total: number;
};
export type Action =
  | { type: "ADD_PRODUCT"; product: DessertData }
  | { type: "REMOVE_PRODUCT"; productId: number }
  | { type: "DELETE_PRODUCT"; productId: number }
  | { type: "RESET_CART" };

export const initialState: State = { selectedProducts: {}, total: 0 };

export function productsReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_PRODUCT":
      const existingItem = state.selectedProducts[action.product.id];
      const quantity = existingItem ? existingItem.quantity + 1 : 1;

      return {
        ...state,
        selectedProducts: {
          ...state.selectedProducts,
          [action.product.id]: {
            ...action.product,
            quantity: quantity,
          },
        },
        total: state.total + action.product.price,
      };
    case "REMOVE_PRODUCT":
      const { [action.productId]: removedItem, ...rest } =
        state.selectedProducts;

      if (removedItem.quantity > 1) {
        return {
          ...state,
          selectedProducts: {
            ...rest,
            [action.productId]: {
              ...removedItem,
              quantity: removedItem.quantity - 1,
            },
          },
          total: state.total - removedItem.price,
        };
      }

      return {
        ...state,
        selectedProducts: {
          ...rest,
        },
        total: state.total - removedItem.price,
      };
    case "DELETE_PRODUCT":
      const { [action.productId]: deletedItem, ...restItems } =
        state.selectedProducts;

      return {
        ...state,
        selectedProducts: {
          ...restItems,
        },
        total: state.total - deletedItem.price * deletedItem.quantity,
      };
    case "RESET_CART":
      return {
        ...state,
        selectedProducts: {},
        total: 0,
      };
    default:
      throw new Error("Acción no reconocida");
  }
}
