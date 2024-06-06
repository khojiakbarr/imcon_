import React from "react";

export default function PortfolioGallery({ url }) {
  const fremeStyle = {
    width: "100%",
    height: "100%",
    border: "1px solid black",
    borderRadius: "10px",
  };

  return (
    <div className=" w-2/3 h-[500px] flex items-center justify-center md:w-full sm:h-[400px]">
      <iframe title={url} style={fremeStyle} src={url} frameborder="0"></iframe>
    </div>
  );
}
