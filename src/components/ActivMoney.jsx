import React from "react";
import Image1 from "../assets/7/1.png";
import Image2 from "../assets/7/2.png";
import Image3 from "../assets/7/3.png";

function ActivMoney() {
  return (
    <div className="bg-white xl:max-w-[31.938rem] h-[35.188rem] w-full flex flex-col justify-between card-shadow rounded-3xl pt-10 overflow-clip">
      <div className="md:px-10 px-5 pb-4 flex flex-col gap-2">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full font-bold md:text-[2rem] text-[1.75rem] md:leading-[2.375rem] leading-[2.25rem] text-left text-black opacity-[87%]">
            Earn up to 7%* interest p.a. with Activ
            <span className="text-[#F23D5B]">Money</span>
          </h1>

          <div className="md:w-12 w-8 md:h-[0.563rem] h-2 rounded-full bg-[#F23D5B]" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="w-full text-black opacity-60 font-medium md:text-xl text-base md:leading-7 leading-[1.375rem] text-left">
            Say goodbye to annual maintenance fees with your Everyday Debit
            Card. Enjoy amazing discounts on your favourite brands.
          </p>

          <h2 className="w-full text-black opacity-40 text-left text-[0.625rem] font-medium">
            * For deposits above 7 days. T&C apply
          </h2>
        </div>
      </div>

      <div className="max-h-[18.125rem] overflow-clip w-full">
        <div className="relative left-[260px] bottom-[0px] duration-300 flex flex-row">
          <img src={Image1} alt="Debit Card Image" className="" />
          <img src={Image2} alt="Debit Card Image" className="" />
        </div>
      </div>
    </div>
  );
}

export default ActivMoney;
