import { useProductsContextActions } from "../../hooks/useProductsContextActions";
import { DessertData } from "../../types/dessert";
import { DecrementButton, IncrementButton } from "./QuantityButtons";

interface Props {
  data: DessertData;
}

export const CartQuantityButton = ({ data }: Props) => {
  const { name } = data;
  const { quantity, addProduct, removeProduct } =
    useProductsContextActions(data);

  return (
    <div className="flex w-full max-w-44 items-center gap-2 rounded-full bg-red px-6 py-2 font-semibold text-white">
      <DecrementButton name={name} handleClick={removeProduct} />

      <p className="grow text-center">
        <span className="sr-only">{`Quantity of ${name} in cart:`}</span>
        {quantity}
      </p>

      <IncrementButton name={name} handleClick={addProduct} />
    </div>
  );
};
