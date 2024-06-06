import React, { useEffect, useState } from "react";
import "./Header.css";
import images from "../../../assets/images";

export default function Header({ scrollToSection }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setState(false);
      }
    };
  }, []);
  

  return (
    <div
      className={`border-b-[1px] border-b-[rgba(0,_0,_0,_0.2)] w-full z-[999] bg-white  ${
        state ? "sticky top-0 " : ""
      }`}
    >
      <div className="container flex ">
        <nav className="flex items-center w-full justify-between py-[15px] md:p-[10px]">
          <img
            className="w-[90px] md:w-[60px] cursor-pointer z-[9999]"
            src={images.logo}
            alt="logo"
          />

          <ul className="flex items-center gap-[40px] md:hidden">
            <li className="text-[16px] font-[500] cursor-pointer">Home</li>
            <li
              onClick={() =>
                scrollToSection(window.document.querySelector("#aboutSec"))
              }
              className="text-[16px] font-[500] cursor-pointer"
            >
              About us
            </li>
            <li
              onClick={() =>
                scrollToSection(window.document.querySelector("#serviceSec"))
              }
              className="text-[16px] font-[500] cursor-pointer"
            >
              Our services
            </li>
            <li
              onClick={() =>
                scrollToSection(window.document.querySelector("#portfolioSec"))
              }
              className="text-[16px] font-[500] cursor-pointer"
            >
              Portfolio
            </li>
          </ul>

          <div
            className={`fixed top-0 left-0 flex items-center justify-center w-full h-screen z-[999]  bg-white translate-y-[-100%] transition-all duration-500 ${
              state && "translate-y-[0%]"
            } `}
          >
            <ul className="flex items-center gap-[40px] flex-col">
              <li className="text-[16px] font-[500] cursor-pointer">Home</li>
              <li
                onClick={() =>
                  scrollToSection(window.document.querySelector("#aboutSec"))
                }
                className="text-[16px] font-[500] cursor-pointer"
              >
                About us
              </li>
              <li
                onClick={() =>
                  scrollToSection(window.document.querySelector("#serviceSec"))
                }
                className="text-[16px] font-[500] cursor-pointer"
              >
                Our services
              </li>
              <li
                onClick={() =>
                  scrollToSection(
                    window.document.querySelector("#portfolioSec")
                  )
                }
                className="text-[16px] font-[500] cursor-pointer"
              >
                Portfolio
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection(
                      window.document.querySelector("#contactSec")
                    )
                  }
                  className="bg-[#3460ff63] px-[20px] py-[5px] rounded-[15px] text-[20px] font-[500] "
                >
                  Contact now
                </button>
              </li>
            </ul>
          </div>

          <button
            onClick={() =>
              scrollToSection(window.document.querySelector("#contactSec"))
            }
            className="bg-[#3460ff63] px-[20px] py-[5px] rounded-[15px] text-[18px] font-[500] md:hidden "
          >
            Contact now
          </button>
          <button
            className={`menu w-[40px]  ${state ? " opened" : null}  z-[999]`}
            onClick={() => setState(!state)}
            aria-label="Main Menu"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
