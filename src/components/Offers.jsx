import React from "react";
import OfferCard from "./OfferCard";
import OfferIcon1 from "../assets/offerIcon1.png";
import OfferIcon2 from "../assets/offerIcon2.svg";
import OfferIcon3 from "../assets/offerIcon3.png";
import OfferIcon4 from "../assets/offerIcon4.svg";
import OfferIcon5 from "../assets/offerIcon5.svg";
import OfferIcon6 from "../assets/offerIcon6.jpg";
import OfferIcon7 from "../assets/offerIcon7.png";
import OfferIcon8 from "../assets/offerIcon8.png";

function Offers() {
  return (
    <div className="w-full bg-[#06141D] md:py-40 py-20 flex justify-center">
      <div className="max-w-[1440px] lg:px-0 px-4 w-full flex flex-col items-center justify-center">
        <div className="max-w-[65.375rem] w-full">
          <div className="max-w-[38.625rem] flex flex-col md:gap-6 gap-4 w-full">
            <h1 className="text-white md:text-[3.5rem] text-[1.75rem] font-bold md:leading-[4.125rem] leading-9 text-left">
              Exclusive offers on your Everyday Savings
            </h1>

            <p className="md:text-xl text-base md:leading-7 leading-[1.375rem] text-white opacity-70 text-left">
              Pay using your Everyday debit card to earn exclusive discounts on
              below partners. Save up to ₹5,700 every month.
            </p>
          </div>
        </div>

        <div className="max-w-[65.375rem] w-full flex flex-col items-end md:pt-20 pt-10 gap-6">
          <OfferCard image={OfferIcon1} />
          <OfferCard image={OfferIcon2} />
          <OfferCard image={OfferIcon3} />
          <OfferCard image={OfferIcon4} />
          <OfferCard image={OfferIcon5} />
          <OfferCard image={OfferIcon6} />
          <OfferCard image={OfferIcon7} />
          <OfferCard image={OfferIcon8} />
        </div>
      </div>
    </div>
  );
}

export default Offers;
