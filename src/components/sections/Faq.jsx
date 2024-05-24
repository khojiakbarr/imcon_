import React from "react";
import Accordions from "../Accordion/Accordions";
import EastIcon from "@mui/icons-material/East";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Faq() {
  return (
    <div className="py-[141px] lg:py-[71px]">
      <div className="container flex items-center justify-between transition-[gap] gap-[120px] xl:gap-[40px] lg:flex-col-reverse">
        <Accordions />

        <div className="max-w-[464px] flex flex-col self-start lg:self-center lg:items-center">
          <h2 className="font-medium text-[40px] leading-[52px] tracking-[-1px] text-[#000000] md:text-[30px] md:leading-[35px] sm:text-[24px] sm:leading-normal sm:text-center">
            How we can help you?
          </h2>
          <p className="font-medium text-[20px] leading-[36px] opacity-[75%] mt-[16px] lg:text-center md:text-[16px] md:leading-[25px] sm:text-[12px]">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </p>

          <form className="w-full my-[36px] flex items-center sm:gap-3 sm:flex-col">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-[313px] h-[62px] rounded-[32px] pl-3 bg-[#FAFAFA] focus:border-none focus:outline-none md:h-[45px] sm:w-full"
              required
            />
            <PrimaryButton text={"Lets Talk"} />
          </form>

          <a
            href="/"
            className="font-semibold text-[20px] leading-[24px] text-[#3461FF] flex gap-[6px] transition-all hover:text-[#ff0000] hover:gap-[15px] xl:text-[18px] md:text-[16px] sm:text-[14px]"
          >
            More FAQ
            <EastIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
