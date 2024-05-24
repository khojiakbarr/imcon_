import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Advanyages.css";
import images from "../../../assets/images";

export default function Advantages() {
  const [state, setState] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setState(true);
    }
  }, []);

  return (
    <section className="md:my-[30px] my-[60px] relative ">
      <div className="container">
        <div className="wrapper flex justify-between md:flex-col md:justify-center">
          <div className="wrapper_left">
            <h2 className="lg:w-[400px] lg:text-[50px] md:text-[40px] md:w-full w-[500px] text-[60px] md:leading-10 leading-tight md:text-center font-[600]">
              Experienced creative, <br />
              and helpful.
            </h2>
          </div>

          <div className="wrapper_right md:w-full md:mt-[30px]">
            <div className="flex justify-center">
              <span className="lg:text-[50px] md:text-[40px]  text-[60px] font-[600] text-[#3460ff9d] mr-[10px] md:w-[47px] ">
                01
              </span>
              <div className="">
                <h3 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
                  Cutting-Edge Solutions
                </h3>
                <p className="max-w-[650px] mt-[7px] md:w-auto font-[500]">
                  We pioneer innovative IT solutions, leveraging the latest
                  technology to propel your business forward with efficiency and
                  agility.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-[30px]">
              <span className="lg:text-[50px] md:text-[40px]  text-[60px] font-[600] text-[#3460ff9d] mr-[10px] md:w-[47px]">
                02
              </span>
              <div className="">
                <h3 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
                  Tailored Expertise
                </h3>
                <p className="max-w-[650px] mt-[7px] md:w-auto font-[500]">
                  Our team offers personalized strategies, crafting bespoke
                  solutions that align perfectly with your unique business goals
                  and needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-[30px]">
              <span className="lg:text-[50px] md:text-[40px]  text-[60px] font-[600] text-[#3460ff9d] mr-[10px] md:w-[47px]">
                03
              </span>
              <div className="">
                <h3 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
                  Reliable Support
                </h3>
                <p className="max-w-[650px] mt-[7px] md:w-auto font-[500]">
                  Count on us for unwavering support, ensuring seamless
                  operations through proactive maintenance and responsive
                  assistance, whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
