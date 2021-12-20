import React, { useEffect } from "react";
import Twenty from "../assest/twenty.jpg";
import thirty from "../assest/thirty.png";
import Tesla from "../assest/tesla.png";
import Shirt from "../assest/Shirt.png";
import Hundred from "../assest/hundred.png";
import { motion, useAnimation } from "framer-motion";
import { homeAnimation, transition } from "../animation/animation.jsx";
import { useInView } from "react-intersection-observer";

const RoadMap = () => {
  const animation = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      console.log("InView");
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.4,
        },
      });
    }
    if (!inView1) {
      console.log("Not in view");
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView1, animation]);
  return (
    <section className="w-9/12 mx-auto py-16 text-white relative" id="roadmap">
      <div className="pb-16 w-3/4 md:w-1/2 mx-auto">
        <h1 className="text-white font-bold text-2xl md:text-4xl text-center md:w-3/4 mx-auto  border-b-2 pb-4  border-pink-500">
          LAUNCH ROADMAP
        </h1>
      </div>
      {/**10% */}
      <div ref={ref1}>
        <motion.div
          animate={animation}
          className="flex flex-col md:flex-row md:w-2/3 mx-auto pb-16"
        >
          <h1 className="text-white font-bold text-5xl md:w-1/2 pb-8 md:pb-0">
            10%
          </h1>
          <p className="text-white text-xl md:w-1/2 font-bold ">
            5 Fat Catz will be airdropped to random Catz holders
          </p>
        </motion.div>
      </div>
      {/**30% */}
      <div className="flex flex-col md:flex-row md:w-2/3 mx-auto pb-16">
        <h1
          className="text-white font-bold text-5xl md:w-1/2 pb-8 md:pb-0"
          data-aos="fade-right"
        >
          30%
        </h1>
        <div className=" md:w-1/2 space-y-16">
          <p className="text-white text-xl font-bold ">
            A $25,000 community grant fund is launched. Rewarding members who
            help contribute to growing our Fat community. Create, design or
            develop something that the community loves and receive funding from
            Fat Catz
          </p>
          <img data-aos="flip-up" src={thirty} alt="" className="rounded" />
        </div>
      </div>
      {/**50% */}
      <div className="flex flex-col md:flex-row md:w-2/3 mx-auto pb-16">
        <h1
          className="text-white font-bold text-5xl md:w-1/2 pb-8 md:pb-0"
          data-aos="fade-right"
        >
          50% SOLD
        </h1>
        <div className=" md:w-1/2 space-y-16">
          <p className="text-white text-xl font-bold ">
            Fat Catz Treasury start. From now 10% of funds will flow to a
            community wallet. The community treasury will be used for a variety
            of things for ensuring longevity.
          </p>
          <img data-aos="flip-up" src={Tesla} alt="" className="rounded" />
        </div>
      </div>
      {/**75% */}
      <div className="flex flex-col md:flex-row md:w-2/3 mx-auto pb-16">
        <h1
          className="text-white font-bold text-5xl md:w-1/2 pb-8 md:pb-0"
          data-aos="fade-right"
        >
          80% SOLD
        </h1>
        <div className=" md:w-1/2 space-y-16">
          <p className="text-white text-xl font-bold ">
            Exclusive merch drop. Get decked in an exclusive selection of Fat
            Catz merch. The community grant fund is filled with an additional
            $25,000!
          </p>
          <img data-aos="flip-up" src={Shirt} alt="" className="rounded" />
        </div>
      </div>
      {/**100% */}
      <div className="flex flex-col md:flex-row md:w-2/3 mx-auto pb-16">
        <h1
          className="text-white font-bold text-5xl md:w-1/2 pb-8 md:pb-0"
          data-aos="fade-right"
        >
          100% SOLD
        </h1>
        <div className=" md:w-1/2 space-y-16">
          <p className="text-white text-xl font-bold ">
            NFTs Staking - You can earn passive income in $FAT by staking your
            Fat Catz. A new collection will be released!
          </p>
          <img data-aos="flip-up" src={Hundred} alt="" className="rounded" />
        </div>
      </div>
      {/**Future Plans  */}
      <div className="flex flex-col md:flex-row md:w-2/3 mx-auto pb-16">
        <h1
          className="text-white font-bold text-5xl md:w-1/2 pb-8 md:pb-0"
          data-aos="fade-right"
        >
          {/* Future Plans */}
        </h1>
        <div className=" md:w-1/2 space-y-16">
          {/* <p className="text-white text-xl font-bold ">
            Future plans after all roadmap activations happen will be split into
            multiple phases and will include:
            <br />
            - Boar(d) Game with our Angry Boars IP development. <br />
            - Future backstory development. <br />
            - Metaverse development and integrations. <br />
            - Collabs with other projects and brands. <br />- More to come
            later.{" "}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
