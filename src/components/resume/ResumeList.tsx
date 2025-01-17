import { useProductsContext } from "../../hooks/useProductsContext";
import { useProductsContextActions } from "../../hooks/useProductsContextActions";
import { Product } from "../../store/productsReducer";
import { currencyFormatted } from "../../utils/currency";
import { Remove } from "../icons/Remove";

export const ResumeList = () => {
  const { state } = useProductsContext();

  return (
    <ul className="space-y-4">
      {Object.values(state.selectedProducts).map((dessert) => (
        <ResumeListItem key={dessert.name} data={dessert} />
      ))}
    </ul>
  );
};

const ResumeListItem = ({ data }: { data: Product }) => {
  const { name, quantity, price } = data;
  const { deleteProduct } = useProductsContextActions(data);

  const formattedPrice = currencyFormatted(price);
  const formattedTotal = currencyFormatted(price * quantity);

  return (
    <li className="flex items-center justify-between gap-2 border-b border-rose-100 pb-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-rose-900">{name}</h4>

        <p className="flex items-baseline gap-4">
          <span className="text-sm font-bold text-red" aria-hidden="true">
            <span className="sr-only">Quantity:</span>
            {quantity}
            <span aria-hidden="true">x</span>
          </span>

          <span className="flex gap-2">
            <span className="text-rose-500">
              <span aria-hidden="true">@</span>
              <span className="sr-only">Unit price:</span>
              {formattedPrice}
            </span>

            <span className="font-medium text-rose-500">
              <span className="sr-only">Total price:</span>
              {formattedTotal}
            </span>
          </span>
        </p>
      </div>
      <button
        aria-label="Remove Classic Tiramisu from cart"
        className="flex h-5 w-5 items-center justify-center rounded-full border border-rose-300 text-center text-rose-300 transition-colors hover:border-rose-900 hover:text-rose-900 focus:border-rose-900 focus:text-rose-900"
        onClick={deleteProduct}
      >
        <Remove />
      </button>
    </li>
  );
};
