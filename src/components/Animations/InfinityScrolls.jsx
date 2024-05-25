import React, { useEffect, useRef } from "react";
import "./style.css";
import images from "../../assets/images";

export default function InfinityScrolls() {
  const scrollerContainer = useRef();

  function Animation() {
    const scroller = scrollerContainer?.current.querySelectorAll(".scroller");

    scroller.forEach((el) => {
      el.setAttribute("data-animated", true);

      const scrollerInner = el.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  useEffect(() => {
    Animation();
  }, []);

  return (
    <div ref={scrollerContainer}>
      <div className="scroller">
        <ul className="tag-list scroller__inner">
          <li className="">
            <img className="rounded-[10px]" src={images.nodeJsIcon} alt="img" />
          </li>
          <li>
            <img src={images.phpIcon} alt="img" />
          </li>
          <li>
            <img src={images.javasicrpIcon} alt="img" />
          </li>
          <li>
            <img className="" src={images.pytonIcon} alt="img" />
          </li>
          <li>
            <img src={images.reactIcon} alt="img" />
          </li>
          <li>
            <img src={images.vueIcon} alt="img" />
          </li>
          <li>
            <img src={images.nextIcon} alt="img" />
          </li>
        </ul>
      </div>

      <div className="scroller" data-direction="right">
        <ul className="tag-list scroller__inner">
          <li>
            <img src={images.figma} alt="img" />
          </li>
          <li>
            <img src={images.premerPro} alt="img" />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
              alt="img"
            />
          </li>
          <li>
            <img src={images.davinchi} alt="img" />
          </li>
          <li>
            <img src={images.photoIcon} alt="img" />
          </li>
          <li>
            <img title="Adobe XD" src={images.XDicon} alt="img" />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
              alt="img"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
