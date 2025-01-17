import { CarbonNeutralAdvertise } from "./CarbonNeutralAdvertise";
import { ConfirmOrderButton } from "./ConfirmOrderButton";
import { ResumeList } from "./ResumeList";
import { ResumeTotal } from "./ResumeTotal";

export const ResumeDetails = () => {
  return (
    <div className="space-y-6">
      <ResumeList />

      <ResumeTotal />

      <CarbonNeutralAdvertise />

      <ConfirmOrderButton />
    </div>
  );
};
