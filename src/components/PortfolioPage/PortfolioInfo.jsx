import React from "react";
import AnimPortfolio from "./AnimPortfolio";

export default function PortfolioInfo({ info }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-3xl font-bold">{info.name}</h2>
      <div className="flex items-center justify-between gap-2 sm:flex-wrap">
        <h3 className="text-lg font-medium flex items-center gap-2 bg-[#f4f7ff] px-4 py-2 rounded-full text-[#464359] whitespace-nowrap sm:text-sm">
          <span>{info.date.time}</span>
          {info.date.image}
        </h3>
        <AnimPortfolio/>
        <h3 className="text-lg font-medium flex items-center flex-row-reverse gap-2 bg-[#a8bfff] px-4 py-2 rounded-full text-[#464359] whitespace-nowrap sm:text-sm">
          <span>{info.deliveryPeriod.time}</span>
          {info.deliveryPeriod.image}
        </h3>
      </div>

      <p className="text-[20px] leading-[40px] font-semibold sm:text-[18px] sm:leading-[28px]">
        {info.description}
      </p>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#18191f]">Technologies</h3>
        <ul className="flex items-center gap-4 flex-wrap">
          {info.tech.map((tech, index) => (
            <li key={index}
            className="w-[150px] bg-[#c6d6ff] px-4 py-2 rounded-lg flex flex-col gap-3 lg:w-[100px] lg:px-2"
            >
              <img src={tech.image} alt="" className="w-1/2" />
              <span className="text-lg font-medium lg:text-base">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
