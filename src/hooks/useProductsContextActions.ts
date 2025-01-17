import { useCallback, useMemo } from "react";
import { useProductsContext } from "./useProductsContext";
import { DessertData } from "../types/dessert";

export const useProductsContextActions = (data: DessertData) => {
  const { state, dispatch } = useProductsContext();

  const quantity = useMemo(
    () => state.selectedProducts[data.id]?.quantity || 0,
    [state.selectedProducts, data.id],
  );

  const addProduct = useCallback(() => {
    dispatch({ type: "ADD_PRODUCT", product: data });
  }, []);

  const removeProduct = useCallback(() => {
    dispatch({ type: "REMOVE_PRODUCT", productId: data.id });
  }, []);

  const deleteProduct = useCallback(() => {
    dispatch({ type: "DELETE_PRODUCT", productId: data.id });
  }, []);

  return { quantity, addProduct, removeProduct, deleteProduct };
};
