import React from "react";

function MonthlyTrial() {
  return (
    <div className="w-full bg-white text-black h-[22.5rem] rounded-3xl card-shadow flex gap-6 pr-10">
      <div className="h-full w-[31.938rem]"></div>

      <div className="w-full pt-10 text-black flex flex-col gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full opacity-[87%] font-bold text-[2.5rem] leading-[3rem]">
            Get monthly discount deals of up to ₹5,700
          </h1>

          <div>red line</div>
        </div>

        <p className="w-full opacity-60 font-medium text-xl leading-7">
          Enjoy exclusive offers and discounts on popular brands like Zepto,
          Blinkit, Swiggy Instamart, BookMyShow, and EazyDiner.
        </p>
      </div>
    </div>
  );
}

export default MonthlyTrial;
