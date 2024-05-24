import React from "react";
import images from "../../assets/images";

export default function CompaniesWeWork() {
  return (
    <section className="bg-[#FAFAFA] pt-[78px] pb-[135px] lg:pt-[58px] lg:pb-[100px]">
      <div className="container flex flex-col gap-[100px] items-center lg:gap-[80px] sm:gap-[50px]">
        <h2 className="font-[500] text-[36px] leading-[49px] text-center md:text-[28px] sm:text-[22px]">Companies we Work with</h2>
  
        <div className="max-w-[1200px] mx-auto grid grid-rows-2 grid-flow-col gap-[94px] lg:gap-[64px] md:grid-rows-4 sm:grid-rows-5 sm:gap-[44px]">
          <img src={images.spotify} alt="spotify" className="inline-block"/>
          <img src={images.google} alt="google" className="inline-block"/>
          <img src={images.uber} alt="uber" className="inline-block"/>
          <img src={images.microsoft} alt="microsoft" className="inline-block"/>
          <img src={images.shopify} alt="shopify" className="inline-block"/>
  
          <img src={images.evernote} alt="evernote" className="inline-block"/>
          <img src={images.adobe} alt="adobe" className="inline-block"/>
          <img src={images.paypal} alt="paypal" className="inline-block"/>
          <img src={images.amazon} alt="amazon" className="inline-block"/>
          <img src={images.asana} alt="asana" className="inline-block"/>
        </div>
      </div>
    </section>
  );
}
