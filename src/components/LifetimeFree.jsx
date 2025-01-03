import React from "react";
import RectangleVector from "../assets/RectangleVector.svg";
import DebitCardImage from "../assets/DebitCardImage.png";

function LifetimeFree() {
  return (
    <div className="bg-white h-[35.188rem] max-w-[31.938rem] w-full card-shadow rounded-3xl pt-10 overflow-clip">
      <div className="xl:px-10 px-5 pb-10 flex flex-col gap-2">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full font-bold text-[2rem] leading-[2.375rem] text-left text-[#212121]">
            Pay using your
            <br />
            <span className="text-black opacity-[87%]">
              Everyday debit card
            </span>
          </h1>

          <div>
            <img src={RectangleVector} alt="Vector" className="w-12" />
          </div>
        </div>

        <p className="w-full text-black opacity-60 font-medium text-xl leading-7 text-left">
          Enjoy FD-like interest in your Savings Account with the ActivMoney
          facility. Access your money anytime with no penalty.
        </p>
      </div>

      <div className="">
        <img
          src={DebitCardImage}
          alt="Debit Card Image"
          className="relative h-[28.938rem] min-w-[43.356rem] right-[170px] bottom-[105px] hover:scale-125 duration-300"
        />
      </div>
    </div>
  );
}

export default LifetimeFree;
