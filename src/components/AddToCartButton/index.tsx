import { CartQuantityButton } from "./CartQuantityButton";
import { AddToCartButton } from "./AddToCartButton";
import { DessertData } from "../../types/dessert";
import { useProductsContextActions } from "../../hooks/useProductsContextActions";

const AddToCartWrapper = ({ data }: { data: DessertData }) => {
  const { quantity } = useProductsContextActions(data);

  return (
    <div className="absolute bottom-0 flex w-full justify-center">
      {quantity === 0 ? (
        <AddToCartButton data={data} />
      ) : (
        <CartQuantityButton data={data} />
      )}
    </div>
  );
};

export default AddToCartWrapper;
