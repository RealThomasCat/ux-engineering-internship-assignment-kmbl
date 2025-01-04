import React from "react";
import MonthlyTrial from "./MonthlyTrial";
import LifetimeFree from "./LifetimeFree";
import ActivMoney from "./ActivMoney";

function Featured() {
  return (
    <div className="w-full bg-[#F7FAFC] flex justify-center">
      <div className="max-w-[1440px] w-full md:px-0 px-4 py-[7.5rem] flex justify-center">
        <div className="max-w-[65.375rem] w-full flex flex-col gap-6">
          <MonthlyTrial />

          <div className="w-full flex xl:flex-row flex-col justify-center gap-6">
            <LifetimeFree />
            <ActivMoney />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
