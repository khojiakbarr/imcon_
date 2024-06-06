import React, { useEffect, useState } from "react";
import "./style.css";
import PortfolioCard from "../components/PortfolioPage/PortfolioCard";
import images from "../assets/images";
import StartIcon from "@mui/icons-material/Start";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

export default function PortfolioPage({ isPage }) {
  const [state, setState] = useState({
    count: 1,
    portfolio: [],
    isShow: false,
  });
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
      url: "https://caexuzbekistan.com/",
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
      url: "https://caexuzbekistan.com/",
      deliveryPeriod: {
        time: "2023-04-25",
        image: <MobileFriendlyIcon />,
      },
    },
  ];

  function showPortfolio(show) {
    let newData = [];
    for (let i = 0; i < state.count; i++) {
      newData.push(data[i]);
    }
    setState({ ...state, portfolio: show ? newData : data });
  }

  useEffect(() => {
    showPortfolio(isPage)
    // eslint-disable-next-line
  }, []);

  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="flex flex-col gap-5" id="galleryWrapper">
          {state.portfolio.map((item, index) => {
            return <PortfolioCard data={item} key={index} />;
          })}
        </div>

        {isPage ? (
          <Link to={"/portfolio"}>
            <PrimaryButton showButton={true} text={"Show more"} />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
