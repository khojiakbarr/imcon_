import React from "react";
import "./style.css";
import PortfolioCard from "../components/PortfolioPage/PortfolioCard";
import images from "../assets/images";
import StartIcon from "@mui/icons-material/Start";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";

export default function PortfolioPage() {
  const data = [
    {
      name: "CAEx Uzbekistan",
      date: {
        time: "2023-01-26",
        image: <StartIcon />,
      },
      description:
        "CAEx Uzbekistan - Internet shop of household appliances in Uzbekistan.",
      tech: [
        {
          name: "Javascript",
          image: images.js,
        },
        {
          name: "Html",
          image: images.html,
        },
        {
          name: "Sass",
          image: images.sass,
        },
        {
          name: "Nodejs",
          image: images.nodejs,
        },
      ],
      images: [images.caex1, images.caex2, images.caex3],
      deliveryPeriod: {
        time: "2023-04-25",
        image: <MobileFriendlyIcon />,
      },
    },
    {
      name: "GOODZONE",
      date: {
        time: "2023-01-26",
        image: <StartIcon />,
      },
      description:
        "Goodzone - Internet shop of household appliances in Uzbekistan.",
      tech: [
        {
          name: "Javascript",
          image: images.js,
        },
        {
          name: "Html",
          image: images.html,
        },
        {
          name: "Sass",
          image: images.sass,
        },
        {
          name: "Nodejs",
          image: images.nodejs,
        },
      ],
      images: [
        images.portfolioPageImage,
        images.portfolioPageImage,
        images.portfolioPageImage,
      ],
      deliveryPeriod: {
        time: "2023-04-25",
        image: <MobileFriendlyIcon />,
      },
    },
  ];

  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="flex flex-col gap-5" id="galleryWrapper">
          {data.map((item, index) => {
            return <PortfolioCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
