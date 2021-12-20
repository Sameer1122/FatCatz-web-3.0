import React from "react";
import { motion } from "framer-motion";
import { transition, homeAnimation } from "../animation/animation";
const DropDown = (props) => {
  const { setclick, click } = props;
  return (
    <motion.div
      initial="in"
      animate="out"
      exit="exit"
      variants={homeAnimation}
      transition={transition}
      className="md:hidden grid grid-rows-4 bg-black  md:items-center md:text-center text-white py-4"
    >
      <div
        className="border-b  font-body w-9/12 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110
      "
      >
        <a
          onClick={props.clickHandler}
          onClick={() => {
            setclick(!click);
          }}
          href="#home"
        >
          Home
        </a>
      </div>
      <div
        className="border-b  font-body w-9/12 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110
      "
      >
        <a
          onClick={props.clickHandler}
          onClick={() => {
            setclick(!click);
          }}
          href="#specs"
        >
          Specs
        </a>
      </div>
      <div
        className="border-b  font-body w-9/12 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110
      "
      >
        <a
          onClick={props.clickHandler}
          onClick={() => {
            setclick(!click);
          }}
          href="#roadmap"
        >
          {" "}
          Road Map
        </a>
      </div>
      <div className="font-body border-b w-9/12 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110">
        <a
          onClick={props.clickHandler}
          onClick={() => {
            setclick(!click);
          }}
          href="#mission"
        >
          {" "}
          Our Mission
        </a>
      </div>
      <div className="font-body border-b w-9/12 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110">
        <a
          onClick={props.clickHandler}
          onClick={() => {
            setclick(!click);
          }}
          href="#team"
        >
          {" "}
          Team
        </a>
      </div>
      <div className="font-body  w-9/12 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110">
        <a
          onClick={props.clickHandler}
          onClick={() => {
            setclick(!click);
          }}
          href="#faq"
        >
          {" "}
          FAQ
        </a>
      </div>

      <div className="w-9/12 mx-auto">
        <button className="bg-pink-700 text-white  font-xs  px-3 py-3 transition duration-200 hover:bg-greenButon hover:bg-green-400">
          {" "}
          CONNECT WALLET
        </button>
      </div>
    </motion.div>
  );
};

export default DropDown;
