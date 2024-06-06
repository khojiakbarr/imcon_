import CompaniesWeWork from "../components/sections/CompaniesWeWork";
import ContactUs from "../components/sections/ContactUs";
import Faq from "../components/sections/Faq";
import OurClients from "../components/sections/OurClients";
import HowWeWork from "../components/sections/HowWeWork";
import Header from "../components/sections/Header/Header";
import { useEffect, useRef } from "react";
import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Service from "../components/sections/Service";
import Advantages from "../components/sections/Advantages/Advantages";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import PortfolioPage from "./PortfolioPage";
import Portfolio from "../components/sections/Portfolio";

function Home() {
  gsap.registerPlugin(ScrollSmoother);
  const wrapperRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef?.current,
      content: contentRef?.current,
      smooth: 2,
      effects: true,
      smoothTouch: true,
      smoothsmoothTouch: 1,
    });
  }, []);

  const scrollToSection = (section) => {
    const targetSection = section;
    if (targetSection) {
      ScrollSmoother.get().scrollTo(targetSection, true, "top top");
    }
  };

  return (
    <div ref={wrapperRef} className="wrapper">
      <div ref={contentRef} className="content">
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <AboutUs />
        <Service />
        <Advantages />
        <HowWeWork />
        <OurClients />
        <Portfolio />
        <PortfolioPage isPage={true} />
        <CompaniesWeWork />
        <Faq />
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
