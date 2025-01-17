import { memo } from "react";
import { CarbonNeutral } from "../icons/CarbonNeutral";

export const CarbonNeutralAdvertise = memo(() => {
  return (
    <p className="flex items-center justify-center gap-2 rounded-lg bg-rose-100 p-4 text-sm">
      <CarbonNeutral />
      <span>
        This is a <span className="font-medium">carbon-neutral</span> delivery
      </span>
    </p>
  );
});
