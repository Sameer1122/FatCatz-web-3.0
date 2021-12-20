import React, { useState } from "react";
import DropDown from "./DropDown";

const NavBar = () => {
  const [click, setclick] = useState(false);
  //Stick NavBar Code
  const [active, setactive] = useState(false);
  const navChange = () => {
    if (window.scrollY >= 100) {
      setactive(true);
    } else {
      setactive(false);
    }
  };
  window.addEventListener("scroll", navChange);
  //Navigation Scroll Function
  const clickHandler = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <nav
      className={
        active
          ? "sticky top-0 z-50 bg-black py-6 border-b border-gray-500 transition duration-200"
          : "w-9/12 mx-auto py-6"
      }
    >
      {/**Nav Bar Start here */}
      <div
        className={
          active
            ? "flex justify-between items-center w-9/12 mx-auto"
            : "flex justify-between items-center"
        }
      >
        {/** Logo */}
        <div className="text-white text-xl font-bold lg:text-3xl">FAT CATZ </div>
        
        {/** NavBar List*/}
        <div className="md:flex items-center md:space-x-2 lg:space-x-16 hidden">
          <div
            className="md:flex items-center space-x-6 lg:space-x-8
           hidden"
          >
            <div>
              <p className="text-white md:text-sm lg:text-base font-semibold fcursor-pointer transition transform duration-200 hover:text-gray-500">
                {" "}
                <a onClick={clickHandler} href="#home">
                  Home
                </a>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold md:text-sm lg:text-base  cursor-pointer transition transform duration-200 hover:text-gray-500">
                <a onClick={clickHandler} href="#roadmap">
                  {" "}
                  Road Map
                </a>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold md:text-sm lg:text-base  cursor-pointer transition duration-200 transform hover:text-gray-500">
                <a onClick={clickHandler} href="#specs">
                  Specs
                </a>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold  md:text-sm lg:text-base cursor-pointer transition duration-200 transform hover:text-gray-500">
                <a onClick={clickHandler} href="#mission">
                  {" "}
                  Our Mission
                </a>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold md:text-sm lg:text-base  cursor-pointer transition duration-200 transform hover:text-gray-500">
                <a onClick={clickHandler} href="#team">
                  {" "}
                  Team
                </a>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold md:text-sm lg:text-base  cursor-pointer transition duration-200 transform hover:text-gray-500">
                <a onClick={clickHandler} href="#faq">
                  {" "}
                  FAQ
                </a>
              </p>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div>
            <button className="bg-pink-700 text-white md:text-sm lg:text-base font-xs md:py-2 md:px-1 xl:px-3 xl:py-3 transition duration-200 hover:bg-greenButon hover:bg-green-400">
              {" "}
              Connect Wallet
            </button>
          </div>
        </div>
        {/**Small Screen Svg */}
        {
          <div
            className="block md:hidden cursor-pointer "
            onClick={() => {
              setclick(!click);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 201 99"
              width="50"
              height="50"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="201" height="99" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_2)">
                <g
                  transform="matrix(1,0,0,1,230.6140594482422,167.4790496826172)"
                  opacity="1"
                >
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,-119.20700073242188,-102.84600067138672)"
                  >
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M53.5,-3 C53.5,-3 53.5,3 53.5,3 C53.5,3 -53.5,3 -53.5,3 C-53.5,3 -53.5,-3 -53.5,-3 C-53.5,-3 53.5,-3 53.5,-3z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,205.1953887939453,167.3459930419922)"
                  opacity="1"
                >
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,-119.70700073242188,-132.8459930419922)"
                  >
                    <path
                      fill="rgb(255,255,255)"
                      fill-opacity="1"
                      d=" M53.5,-3 C53.5,-3 53.5,3 53.5,3 C53.5,3 -53.5,3 -53.5,3 C-53.5,3 -53.5,-3 -53.5,-3 C-53.5,-3 53.5,-3 53.5,-3z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        }
        {/** End of Small Screen SVG */}
      </div>
      {click && (
        <DropDown
          clickHandler={clickHandler}
          setclick={setclick}
          click={click}
        />
      )}
    </nav>
  );
};

export default NavBar;
