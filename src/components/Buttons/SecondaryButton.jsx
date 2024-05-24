import React from "react";

export default function SecondaryButton() {
  return (
    <button className="border border-[#3461FF] px-4 py-2 rounded-[24px] relative button-anim">
      <div className="border absolute top-[-1px] w-[80%] flex items-center justify-center"></div>
      <span className="text-[#3461FF] sm:text-[12px]">Explore all projects</span>
    </button>
  );
}
