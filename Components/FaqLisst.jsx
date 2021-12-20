import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqtransition, faqAnimation } from "../animation/animation.jsx";

const FaqList = (props) => {
  const [toggle, settoggle] = useState(false);

  const toggleHandler = () => {
    settoggle(!toggle);
  };
  return (
    <>
      {/**Question */}
      <div className=" bg-transparent border-t border-faqBorder md:py-2 lg:py-4 ">
        <div className="flex  text-white font-body py-2 justify-between lg:px-4">
          <h3 className="font-bold text-2xl">{props.data.qustion}</h3>
          <p
            className="font-body text-xl cursor-pointer transition duration-200 hover:text-gray-500"
            onClick={toggleHandler}
          >
            {toggle ? "x" : "+"}
          </p>
        </div>
      </div>
      {/**Answer */}

      {toggle && (
        <motion.div
          initial="in"
          animate="out"
          exit="exit"
          variants={faqAnimation}
          transition={faqtransition}
        >
          <p className="  text-white  mt-4 p-4">{props.data.answer}</p>
        </motion.div>
      )}
    </>
  );
};

export default FaqList;
