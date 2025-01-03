import React from "react";
import RectangleVector from "../assets/RectangleVector.svg";
import DebitCardImage from "../assets/DebitCardImage.png";

function ActivMoney() {
  return (
    <div className="bg-white h-[35.188rem] max-w-[31.938rem] w-full card-shadow rounded-3xl pt-10 overflow-clip">
      <div className="px-10 pb-4 flex flex-col gap-2">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="w-full font-bold text-[2rem] leading-[2.375rem] text-left text-black opacity-[87%]">
            Earn up to 7%* interest p.a.
            <br />
            with Activ<span className="text-[#F23D5B]">Money</span>
          </h1>

          <div>
            <img src={RectangleVector} alt="Vector" className="w-12" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="w-full text-black opacity-60 font-medium text-xl leading-7 text-left">
            Say goodbye to annual maintenance fees with your Everyday Debit
            Card. Enjoy amazing discounts on your favourite brands.
          </p>

          <h2 className="w-full text-black opacity-40 text-left text-[0.625rem] font-medium">
            * For deposits above 7 days. T&C apply
          </h2>
        </div>
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

export default ActivMoney;
