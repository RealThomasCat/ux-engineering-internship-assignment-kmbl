import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="w-full bg-white bg-opacity-75 h-20 flex justify-between items-center px-4">
      <Logo />

      <button className="bg-[#3857FF] px-4 py-2 rounded-[2rem] leading-4 font-medium text-xs">
        Open now
      </button>
    </div>
  );
}

export default Navbar;
