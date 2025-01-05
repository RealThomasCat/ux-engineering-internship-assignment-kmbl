import React from "react";
import DebitCardImage from "../assets/DebitCardImage.png";

function LifetimeFree() {
  return (
    <div className="group bg-white xl:max-w-[31.938rem] h-[35.188rem] w-full flex flex-col justify-between card-shadow rounded-3xl pt-10 overflow-clip">
      <div className="md:px-10 px-5 pb-10 flex flex-col gap-2">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full font-bold md:text-[2rem] text-[1.75rem] md:leading-[2.375rem] leading-[2.25rem] text-left text-[#212121]">
            Pay using your
            <span className="text-black opacity-[87%]">
              Everyday debit card
            </span>
          </h1>

          <div className="md:w-12 w-8 md:h-[0.563rem] h-2 rounded-full bg-[#F23D5B]" />
        </div>

        <p className="w-full text-black opacity-60 font-medium md:text-xl text-base md:leading-7 leading-[1.375rem] text-left">
          Enjoy FD-like interest in your Savings Account with the ActivMoney
          facility. Access your money anytime with no penalty.
        </p>
      </div>

      <div className="max-h-[18.125rem] overflow-clip w-full">
        <div className="card-origin group-hover:scale-[1.3] ease-out duration-300">
          <img
            src={DebitCardImage}
            alt="Debit Card Image"
            className="relative h-[28.938rem] min-w-[43.356rem] right-[170px] bottom-[105px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LifetimeFree;
