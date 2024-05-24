import React from "react";

export default function AboutUs() {
  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="wrapper flex justify-between mt-[20px] md:flex-wrap md:flex-col sm:items-center">
          <div className="wrapper_info grid grid-cols-2 gap-[30px] md:gap-[20px] md:grid-cols-4 md:place-content-center sm:grid-cols-2">
            <div className="max-w-[185px] md:max-w-[150px] ">
              <h3 className="lg:text-[35px] text-[65px] font-[600] block">
                245%
              </h3>
              <p className="text-[16px] font-[500] md:text-[14px]">
                More revenues for the brand
              </p>
            </div>

            <div className="w-[185px] md:w-[150px] ">
              <h3 className="lg:text-[35px] text-[65px] font-[600] block">
                130K+
              </h3>
              <p className="text-[16px] font-[500] md:text-[14px]">
                Audiences reached
              </p>
            </div>

            <div className="w-[185px] md:w-[150px] ">
              <h3 className="lg:text-[35px] text-[65px] font-[600] block">
                50+
              </h3>
              <p className="text-[16px] font-[500] md:text-[14px]">
                brands trust us
              </p>
            </div>

            <div className="w-[185px] md:w-[150px] ">
              <h3 className="lg:text-[35px] text-[65px] font-[600] block">
                24+
              </h3>
              <p className="text-[16px] font-[500] md:text-[14px]">
                Worldwide awards
              </p>
            </div>
          </div>

          <div className="wrapper_about max-w-[700px]  lg:max-w-[400px] md:max-w-full">
            <h2 className="text-[64px] lg:text-[35px] mt-[20px] font-[600] md:text-center">
              About us
            </h2>
            <p className="text-[18px] font-[500] md:text-center ">
              IMCON team is 3 year company which makes IT solutions easy for
              business owners. Among these timeline we helped companies located
              at every corner of the world including United States, Azerbaijan,
              Greece, United Arab Emirates etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
