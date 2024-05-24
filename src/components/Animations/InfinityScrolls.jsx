import React, { useEffect, useRef } from "react";
import "./style.css";

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
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    }
    Animation();
  }, []);

  return (
    <div ref={scrollerContainer}>
      <div className="scroller">
        <ul className="tag-list scroller__inner">
          <li className="">
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
        </ul>
      </div>

      <div className="scroller" data-direction="right">
        <ul className="tag-list scroller__inner">
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
          <li>
            <img src="" alt="img" />
          </li>
        </ul>
      </div>
    </div>
  );
}
