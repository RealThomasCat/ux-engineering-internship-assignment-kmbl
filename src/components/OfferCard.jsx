import React from "react";

function OfferCard({ image }) {
  return (
    <div className="bg-white p-6 max-w-[39rem] w-full flex gap-6 rounded-3xl">
      <div className="w-32 h-7 bg-red-500">
        <img src={image} alt="Logo" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="w-full text-left font-bold text-xl leading-[1.75rem] text-black opacity-[87%]">
          30% off on restaurant bills
        </h1>

        <p className="w-full text-left text-sm leading-[1.125rem] font-medium text-black opacity-60">
          Up to ₹1,000 per transaction. No minimum bill value.
          <br />
          Offer available 4 times a month on your debit card.
        </p>
      </div>
    </div>
  );
}

export default OfferCard;
