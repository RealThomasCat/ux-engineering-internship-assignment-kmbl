import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="md:flex hidden w-full bg-white bg-opacity-75 h-20 justify-center items-center fixed backdrop-blur-[25px] z-50">
      <div className="max-w-[1440px] w-full flex items-center justify-between px-[5.625rem]">
        <Logo />

        <button className="bg-[#3857FF] px-4 py-2 rounded-[2rem] leading-4 font-medium text-xs">
          Open now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
