import React from "react";
import RectangleVector from "../assets/RectangleVector.svg";
import Temp from "../assets/temp.png";

function MonthlyTrial() {
  return (
    <div className="w-full bg-white text-black min-h-[22.5rem] rounded-3xl card-shadow flex gap-6 sm:pr-10">
      <div className="sm:block hidden h-full max-w-[31.938rem] w-full overflow-clip">
        <img src={Temp} alt="Image" className="h-full w-full" />
      </div>

      <div className="w-full h-fit pt-10 sm:pl-0 px-5 text-black flex flex-col gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full opacity-[87%] font-bold text-[2.5rem] leading-[3rem] text-left">
            Get monthly discount deals of up to ₹5,700
          </h1>

          <div>
            <img src={RectangleVector} alt="Vector" className="w-12" />
          </div>
        </div>

        <p className="w-full opacity-60 font-medium text-xl leading-7 text-left">
          Enjoy exclusive offers and discounts on popular brands like Zepto,
          Blinkit, Swiggy Instamart, BookMyShow, and EazyDiner.
        </p>

        <div className="sm:hidden h-full max-w-[31.938rem] w-full overflow-clip">
          <img src={Temp} alt="Image" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default MonthlyTrial;
