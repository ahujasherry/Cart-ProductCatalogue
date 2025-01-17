import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductContext debe usarse dentro de ProductProvider");
  }
  return context;
};
