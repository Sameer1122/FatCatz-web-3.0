import React from "react";
import Solar from "../assest/solar.png";
const Mission = () => {
  return (
    <section className="w-9/12 mx-auto py-16" id="mission">
      <div className="space-y-8">
        <div className="pb-16 w-2/3 md:w-1/2 mx-auto">
          <h1 className="text-white font-bold text-2xl md:text-4xl text-center md:w-3/4 mx-auto  border-b-2 pb-4  border-pink-500">
            OUR MISSION
          </h1>
        </div>
        <p className="text-white text-2xl">
          We want Fat Catz to be a community-driven collectible NFT project. We
          think that with the right and well coordinated ideas, Fat Catz can
          establish themselves as icons of future popular culture.
        </p>
        {/* <img src={Solar} alt="" /> */}
      </div>
    </section>
  );
};

export default Mission;
