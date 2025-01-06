import React from "react";
import Temp from "../assets/temp.png";

function MonthlyTrial() {
  return (
    <div className="w-full bg-white text-black min-h-[22.5rem] rounded-3xl card-shadow flex gap-6 md:pr-10">
      <div className="md:flex hidden h-full max-w-[31.938rem] w-full overflow-clip justify-center items-center">
        <div className="">
          <img src={Temp} alt="Image" className="w-full object-fill" />
        </div>
      </div>

      <div className="w-full h-fit pt-10 md:pl-0 px-5 text-black flex flex-col gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full opacity-[87%] font-bold md:text-[2.5rem] text-[1.75rem] md:leading-[3rem] leading-[2.25rem] text-left">
            Get monthly discount
            <br />
            deals of up to ₹5,700
          </h1>

          <div className="md:w-12 w-8 md:h-[0.563rem] h-2 bg-[#F23D5B] rounded-full" />
        </div>

        <p className="w-full opacity-60 font-medium md:text-xl text-base md:leading-7 leading-[1.375rem] text-left">
          Enjoy exclusive offers and discounts on popular brands like Zepto,
          Blinkit, Swiggy Instamart, BookMyShow, and EazyDiner.
        </p>

        <div className="md:hidden max-h-[18.125rem] h-full flex w-full overflow-clip justify-center items-center bg-red-400">
          <img src={Temp} alt="Image" className="max-h-[18.125rem] h-full" />
        </div>
      </div>
    </div>
  );
}

export default MonthlyTrial;
