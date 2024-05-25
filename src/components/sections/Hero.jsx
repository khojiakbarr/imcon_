import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import images from "../../assets/images";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero({ scrollToSection }) {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.from(".bg_hero", {
      opacity: 0,
      duration: 2,
      x: 100,
    });
    gsap.from(".hero_title", {
      opacity: 0,
      duration: 2,
      y: -50,
    });
  }, []);

  return (
    <div className="my-[40px]">
      <div className="container ">
        <div className="wrapper flex items-center md:flex-wrap md:gap-[30px] ">
          <div className="bg_wrapper">
            <h3 className="hero_title md:text-[40px] text-[70px] font-[600] capitalize max-w-[700px]  leading-[110%] lg:text-[45px] xl:text-[50px]">
              Get our digital <br /> solutions for your problems
            </h3>

            <button
              onClick={() =>
                scrollToSection(window.document.querySelector("#contactSec"))
              }
              className="bg-[#3460ff63] px-[20px] py-[5px] rounded-[15px] text-[20px] font-[500] mt-[20px]"
            >
              Contact now
            </button>
          </div>

          <div className="max-w-[800px] md:w-full px-[20px] lg:w-[500px] ">
            <img className="bg_hero" src={images.bg_hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
