import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { OrderList } from "./OrderList";
import { ReactNode } from "react";
import { ResumeTotal } from "../resume/ResumeTotal";
import { useProductsContext } from "../../hooks/useProductsContext";

export const OrderDialog = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <DialogWrapper isOpen={isOpen}>
      <div className="space-y-6">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          width={48}
          height={48}
          alt=""
        />

        <div className="space-y-2">
          <DialogTitle as="h2" className="text-4xl font-bold text-rose-900">
            Order Confirmed
          </DialogTitle>

          <p className="text-rose-500">We hope you enjoy your food!</p>
        </div>
      </div>

      <div className="flex max-h-full grow flex-col justify-between overflow-y-scroll rounded-lg bg-rose-100">
        <div className="max-h-full overflow-hidden pt-6">
          <div className="h-full overflow-scroll px-6">
            <OrderList />
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="border-t border-rose-500/20 pt-6">
            <ResumeTotal />
          </div>
        </div>
      </div>
      <StartNewOrderButton close={close} />
    </DialogWrapper>
  );
};

const DialogWrapper = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      transition
      className="relative z-10 focus:outline-none"
      onClose={() => {}}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-end justify-center md:items-center">
          <DialogPanel
            transition
            className="flex h-[90dvh] w-full max-w-xl flex-col gap-8 overflow-hidden rounded-t-xl bg-white px-6 pb-6 pt-10 data-[enter]:data-[closed]:translate-y-full data-[leave]:data-[closed]:translate-y-full data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-300 md:rounded-xl md:p-10"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

const StartNewOrderButton = ({ close }: { close: () => void }) => {
  const { dispatch } = useProductsContext();

  const handleClick = () => {
    dispatch({ type: "RESET_CART" });
    close();
  };

  return (
    <Button
      className="w-full rounded-full bg-red p-4 font-medium text-white"
      onClick={handleClick}
    >
      Start New Order
    </Button>
  );
};
