import { ResumeCounter } from "./ResumeCounter";
import { ResumeEmpty } from "./ResumeEmpty";
import { ResumeDetails } from "./ResumeDetails";
import { useProductsContext } from "../../hooks/useProductsContext";

export const Resume = () => {
  return (
    <div className="space-y-6 rounded-lg bg-white p-6">
      <h2 className="text-2xl font-bold text-red">
        Your Cart <ResumeCounter />
      </h2>

      <ResumeBody />
    </div>
  );
};

const ResumeBody = () => {
  const { state } = useProductsContext();

  return (
    <>
      {Object.keys(state.selectedProducts).length === 0 ? (
        <ResumeEmpty />
      ) : (
        <ResumeDetails />
      )}
    </>
  );
};
