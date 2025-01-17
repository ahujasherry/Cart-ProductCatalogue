import { Button } from "@headlessui/react";
import { useState } from "react";
import { memo } from "react";
import { OrderDialog } from "../order/OrderDialog";

export const ConfirmOrderButton = memo(() => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="w-full rounded-full bg-red p-4 font-medium text-white"
      >
        Confirm Order
      </Button>

      <OrderDialog isOpen={isOpen} close={close} />
    </>
  );
});
