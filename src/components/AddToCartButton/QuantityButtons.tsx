import { memo } from "react";
import { Minus } from "../icons/Minus";
import { Plus } from "../icons/Plus";

interface Props {
  name: string;
  handleClick: () => void;
}

const buttonStyles =
  "rounded-full border border-white w-4 h-4 flex justify-center items-center hover:text-red hover:bg-white relative grow-0 transition-colors";
const buttonIconStyles = "absolute left-1/2 -translate-x-1/2";

export const DecrementButton = memo(({ name, handleClick }: Props) => {
  return (
    <button
      className={buttonStyles}
      aria-label={`Remove one ${name} from cart`}
      onClick={handleClick}
    >
      <Minus className={buttonIconStyles} />
    </button>
  );
});

export const IncrementButton = memo(({ name, handleClick }: Props) => {
  return (
    <button
      className={buttonStyles}
      aria-label={`Add one more ${name} to cart`}
      onClick={handleClick}
    >
      <Plus className={buttonIconStyles} />
    </button>
  );
});
