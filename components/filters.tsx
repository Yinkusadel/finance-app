import { Suspense } from "react";
import AccountFilter from "@/components/account-filter";
import DateFilter from "@/components/date-filter";

const Filters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <Suspense fallback={<div>Loading account filter...</div>}>
        <AccountFilter />
      </Suspense>
      <Suspense fallback={<div>Loading date filter...</div>}>
        <DateFilter />
      </Suspense>
    </div>
  );
};

export default Filters;
