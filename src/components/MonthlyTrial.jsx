import React from "react";
import Temp from "../assets/temp.png";

import PizzaImage from "../assets/Trial/Image 1 - Food Parcel.png";
import PhoneImage from "../assets/Trial/Image 2 - Bottle.png";
import PopcornImage from "../assets/Trial/popcorn.png";
import PingGiftImage from "../assets/Trial/Ping Gift Group.png";
import BeigeGiftImage from "../assets/Trial/beige gift.png";
import TicketImage from "../assets/Trial/Movie 1.png";
import MainImage from "../assets/Trial/ESA@4x 1.png";
import RamenImage from "../assets/Trial/Ramen Group.png";

function MonthlyTrial() {
  return (
    <div className="group w-full bg-white text-black min-h-[22.5rem] rounded-3xl card-shadow flex gap-6 md:pr-10">
      <div className="md:flex hidden h-full max-w-[31.938rem] w-full overflow-clip justify-center items-center">
        {/* <div className="bg-red-500">
          <img src={Temp} alt="Image" className="w-full object-fill" />
        </div> */}
        <div className="duration-300 relative h-full w-full">
          <img
            src={PopcornImage}
            alt="Debit Card Image"
            className="absolute left-8 top-20 group-hover:translate-y-4 group-hover:-translate-x-24 group-hover:rotate-45 ease-out duration-300 z-[10]"
          />
          <img
            src={RamenImage}
            alt="Debit Card Image"
            className="absolute top-0 left-10 group-hover:-translate-y-20 group-hover:-translate-x-4 group-hover:rotate-12 ease-out duration-300 z-[9]"
          />
          <img
            src={PingGiftImage}
            alt="Debit Card Image"
            className="absolute top-2 left-44 group-hover:-translate-y-16 group-hover:translate-x-8 group-hover:rotate-45 ease-out duration-300 z-[8]"
          />
          <img
            src={PizzaImage}
            alt="Debit Card Image"
            className="absolute top-24 left-40 group-hover:translate-y-24 group-hover:translate-x-20 group-hover:rotate-45 ease-out duration-300 z-[7]"
          />
          <img
            src={TicketImage}
            alt="Debit Card Image"
            className="absolute top-24 left-40 group-hover:translate-x-40 group-hover:-rotate-[75deg] ease-out duration-300 z-[6]"
          />
          <img
            src={PhoneImage}
            alt="Debit Card Image"
            className="absolute top-44 left-28 group-hover:translate-y-20 group-hover:rotate-[30deg] ease-out duration-300 z-[5]"
          />
          <img
            src={BeigeGiftImage}
            alt="Debit Card Image"
            className="absolute top-10 left-14 group-hover:-translate-y-8 group-hover:-translate-x-12 group-hover:rotate-12 ease-out duration-300 z-[4]"
          />
          <img
            src={MainImage}
            alt="Debit Card Image"
            className="absolute top-20 left-28 opacity-0 group-hover:opacity-100 ease-out duration-300 z-[3]"
          />
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

        <div className="md:hidden max-h-[18.125rem] h-full flex w-full overflow-clip justify-center items-center">
          <img src={Temp} alt="Image" className="max-h-[18.125rem] h-full" />
        </div>
      </div>
    </div>
  );
}

export default MonthlyTrial;
