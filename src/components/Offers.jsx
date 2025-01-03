import React from "react";
import OfferCard from "./OfferCard";

function Offers() {
  return (
    <div className="w-full bg-[#06141D] py-40 flex justify-center">
      <div className="max-w-[1440px] lg:px-0 px-4 w-full flex flex-col items-center justify-center">
        <div className="max-w-[65.375rem] flex flex-col gap-6 w-full">
          <h1 className="text-white text-[3.5rem] font-bold leading-[4.125rem] text-left">
            Exclusive offers on your
            <br />
            Everyday Savings
          </h1>

          <p className="text-xl leading-7 text-white opacity-70 text-left">
            Pay using your Everyday debit card to earn exclusive discounts on
            <br />
            below partners. Save up to ₹5,700 every month.
          </p>
        </div>

        <div className="max-w-[65.375rem] w-full flex flex-col items-end pt-20 gap-6">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </div>
  );
}

export default Offers;
