import React from "react";

import images from "../../assets/images";

export default function Service() {
  return (
    <div id="serviceSec" className="md:mt-[40px] my-[60px]">
      <div className="container">
        <center>
          <h3 className="text-center lg:w-[400px] lg:text-[50px] md:text-[40px] md:w-full w-[500px] text-[60px] md:leading-10 leading-tight font-[600]">
            Crative studio <br /> with art & technologies
          </h3>
        </center>
        <div className="wrapper flex justify-center gap-[30px] pt-[40px] lg:flex-wrap md:flex-col md:items-center">
          <div className="service flex flex-col items-center w-[250px]">
            <div className="service-icon h-[100px] w-[100px]">
              <img
                className="w-full transition-all duration-300 hover:scale-110"
                src={images.icon_design}
                alt="logo"
              />
            </div>
            <h2 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
              Web development
            </h2>
            <p className="text-center mt-[10px] font-[500]">
              We develop websites with the high quality, from corporate websites
              to web applications
            </p>
          </div>

          <div className="service flex flex-col items-center w-[250px]">
            <div className="service-icon h-[100px] w-[100px]">
              <img
                className="w-full transition-all duration-300 hover:scale-110"
                src={images.icon_UXUI}
                alt="logo"
              />
            </div>
            <h2 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
              UX&UI
            </h2>
            <p className="text-center mt-[10px] font-[500]">
              Developing a project MindMap and designing it with the optimal
              solution based on its architecture
            </p>
          </div>

          <div className="service flex flex-col items-center w-[250px]">
            <div className="service-icon h-[100px] w-[100px]">
              <img
                className="w-full transition-all duration-300 hover:scale-110"
                src={images.icon_crm}
                alt="logo"
              />
            </div>
            <h2 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
              CRM systems
            </h2>
            <p className="text-center mt-[10px] font-[500]">
              Automation of business and processes, development of electronic
              management systems that reduce paper-work by 100%
            </p>
          </div>

          <div className="service flex flex-col items-center w-[250px]">
            <div className="service-icon h-[100px] w-[100px] ">
              <img
                className="w-full transition-all duration-300 hover:scale-110"
                src={images.icon_brand}
                alt="logo"
              />
            </div>
            <h2 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
              Branding
            </h2>
            <p className="text-center mt-[10px] font-[500]">
              Developing a creative and unique logo for your project and create
              its branding guidelines
            </p>
          </div>
          <div className="service flex flex-col items-center w-[250px]">
            <div className="service-icon h-[100px] w-[100px] flex items-center">
              <img
                className="w-full transition-all duration-300 hover:scale-110"
                src={images.icon_video}
                alt="logo"
              />
            </div>
            <h2 className="lg:text-[22px] md:text-[18px] text-[25px] font-[600]">
              Video editing
            </h2>
            <p className="text-center mt-[10px] font-[500]">
              Transform your vision into captivating stories. Our expert video
              editing service delivers professional, polished content tailored
              to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
