import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import PortfolioCard from "../Cards/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="w-full py-[80px] sm:py-[20px] lg:py-[40px]">
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

        <h4 className="mt-5 mb-5 sm:mt-3 sm:text-[14px]">See what we do for our clients</h4>

        <SecondaryButton />

        <div className=" grid grid-cols-3 place-items-center grid-flow-row gap-8 mt-10 lg:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:place-items-start">
          <PortfolioCard
            image={
              "https://tse3.mm.bing.net/th?id=OIP.LZ1ERbV5ErFdJP0SNa69nwHaE8&pid=Api&P=0&h=220"
            }
            title={"IT Marketing"}
            subtitle={"Marketing"}
          />
          <PortfolioCard
            image={
              "https://tse3.mm.bing.net/th?id=OIP.keD7-eq5pl0ldAgZ0m7U_wHaFS&pid=Api&P=0&h=220"
            }
            title={"Managed IT Service"}
            subtitle={"Service"}
          />
          <PortfolioCard
            image={
              "https://tse2.mm.bing.net/th?id=OIP.KQPk3S_UdKBsbRZVb9DnagHaEa&pid=Api&P=0&h=220"
            }
            title={"Security Services"}
            subtitle={"Service"}
          />
          <PortfolioCard
            image={
              "https://tse3.mm.bing.net/th?id=OIP.LZ1ERbV5ErFdJP0SNa69nwHaE8&pid=Api&P=0&h=220"
            }
            title={"IT Marketing"}
            subtitle={"Marketing"}
          />
          <PortfolioCard
            image={
              "https://tse3.mm.bing.net/th?id=OIP.keD7-eq5pl0ldAgZ0m7U_wHaFS&pid=Api&P=0&h=220"
            }
            title={"Managed IT Service"}
            subtitle={"Service"}
          />
          <PortfolioCard
            image={
              "https://tse2.mm.bing.net/th?id=OIP.KQPk3S_UdKBsbRZVb9DnagHaEa&pid=Api&P=0&h=220"
            }
            title={"Security Services"}
            subtitle={"Service"}
          />
        </div>
      </div>
    </div>
  );
}
