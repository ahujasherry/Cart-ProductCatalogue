import { Product } from "../../store/productsReducer";
import { currencyFormatted } from "../../utils/currency";

export const OrderListItem = (dessert: Product) => {
  const formattedPrice = currencyFormatted(dessert.price);
  const formattedTotal = currencyFormatted(dessert.price * dessert.quantity);

  return (
    <li className="flex items-center gap-4 border-b border-rose-500/20 pb-4 last:border-none">
      <img
        src={dessert.image.thumbnail}
        alt=""
        className="aspect-square w-14 rounded-md"
      />

      <div className="flex w-full items-center justify-between gap-4">
        <div className="space-y-2 text-sm">
          <h4 className="font-medium text-rose-900">{dessert.name}</h4>

          <p className="flex items-baseline gap-4">
            <span className="font-bold text-red" aria-hidden="true">
              <span className="sr-only">Quantity:</span>
              {dessert.quantity}
              <span aria-hidden="true">x</span>
            </span>

            <span className="flex gap-2">
              <span className="text-rose-500">
                <span aria-hidden="true">@</span>{" "}
                <span className="sr-only">Unit price:</span>
                {formattedPrice}
              </span>
            </span>
          </p>
        </div>

        <p className="font-medium text-rose-900">
          <span className="sr-only">Total price:</span>
          {formattedTotal}
        </p>
      </div>
    </li>
  );
};
