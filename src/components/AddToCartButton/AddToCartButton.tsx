import { useProductsContextActions } from "../../hooks/useProductsContextActions";
import { DessertData } from "../../types/dessert";

interface Props {
  data: DessertData;
}

export const AddToCartButton = ({ data }: Props) => {
  const { addProduct } = useProductsContextActions(data);

  return (
    <button
      className="flex w-full max-w-44 items-center gap-2 rounded-full border border-red bg-white px-6 py-2 font-semibold text-rose-900 transition-colors hover:text-red"
      aria-label={`Add ${data.name} to cart`}
      onClick={addProduct}
    >
      <img src="/assets/images/icon-add-to-cart.svg" alt="" aria-hidden />
      Add to Cart
    </button>
  );
};
