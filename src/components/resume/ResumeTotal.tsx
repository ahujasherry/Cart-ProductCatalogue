import { useProductsContext } from "../../hooks/useProductsContext";
import { currencyFormatted } from "../../utils/currency";

export const ResumeTotal = () => {
  const { state } = useProductsContext();

  const formattedTotal = currencyFormatted(state.total);

  return (
    <p className="flex items-center justify-between">
      <span className="text-rose-900">Order Total</span>
      <span className="text-2xl font-bold text-rose-900">{formattedTotal}</span>
    </p>
  );
};
