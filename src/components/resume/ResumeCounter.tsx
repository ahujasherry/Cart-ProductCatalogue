import { useProductsContext } from "../../hooks/useProductsContext";

export const ResumeCounter = () => {
  const { state } = useProductsContext();

  return (
    <>
      <span className="sr-only">has</span>(
      {Object.values(state.selectedProducts).length})
      <span className="sr-only">items</span>
    </>
  );
};
