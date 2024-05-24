import React from "react";
import HowWeWorkCard from "../Cards/HowWeWorkCard";
import images from "../../assets/images";

export default function HowWeWork() {
  const data = [
    {
      icon: images.contact,
      title: "Contact",
      paragraph: "Send us your project request or project idea.",
    },
    {
      icon: images.analysis,
      title: "Analysis",
      paragraph: "We will contact you to clarify your project requirements.",
    },
    {
      icon: images.offer,
      title: "Offer",
      paragraph: "We will provide you with our free, non-binding application.",
    },
    {
      icon: images.team,
      title: "Team",
      paragraph: "We provide a team for your requirements.",
    },
    {
      icon: images.start,
      title: "Start",
      paragraph: "You will get to know the team and we'll get started.",
    },
    
  ]

  return (
    <div className="w-full py-[80px] md:py-[50px] sm:py-[25px]">
        <div className="container flex flex-col gap-[80px] md:gap-[50px] sm:gap-[20px]">
            <h2 className="text-[64px] leading-[64px] font-extrabold text-[#3461FF] lg:text-[50px] md:text-[38px] sm:text-[28px]">How we work!</h2>
            <div className="w-full flex justify-between md:flex-col md:justify-start md:gap-[30px]">
              {
                data.map((item, index) => (
                  <HowWeWorkCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    paragraph={item.paragraph}
                  />
                ))
              }
            </div>
        </div>
    </div>
  );
}
