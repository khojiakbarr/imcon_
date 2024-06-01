import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import PortfolioCard from "../Cards/PortfolioCard";

export default function Portfolio() {
  return (
    <div
      id="portfolioSec"
      className="w-full pt-[80px] sm:pt-[20px] lg:pt-[40px] "
    >
      <div className="container flex flex-col items-center">
        <h2 className="text-[#3461FF] sm:text-[14px]">Our Portfolio</h2>

        <h3
          className="text-[58px] leading-[60px] text-center font-bold max-w-[550px] 
        lg:text-[48px] lg:leading-[50px] lg:max-w-[450px] 
        md:text-[38px] md:max-w-[350px] md:leading-[40px]
        sm:text-[22px] sm:max-w-auto sm:leading-[28px]"
        >
          Check our awesome portfolio<span className="text-[#3461FF]">.</span>
        </h3>

        <h4 className="mt-5 mb-2 sm:mt-3 sm:text-[14px]">
          See what we do for our clients
        </h4>
      </div>
    </div>
  );
}
