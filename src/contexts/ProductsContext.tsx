import { createContext, ReactNode, useReducer } from "react";
import {
  Action,
  initialState,
  productsReducer,
  State,
} from "../store/productsReducer";

export const ProductsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
