import React from "react";
import InfinityScrolls from "../Animations/InfinityScrolls";

export default function OurClients() {

  return (
    <div className="max-w-[100%] overflow-hidden py-[30px]">
      <div className="container p-0">
          <h2 className="text-[64px] leading-[64px] font-extrabold text-[#3461FF] mb-[53px] lg:text-[48px] lg:leading-[48px] lg:mb-[40px] md:text-[42px] sm:text-[28px] sm:leading-[28px] sm:mb-[20px]">Our Clients</h2>
          
          <InfinityScrolls />
      </div>
    </div>
  );
}
