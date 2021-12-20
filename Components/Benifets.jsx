import React from "react";
import Benifet1 from "../assest/benifet1.png";
import Benifet2 from "../assest/benifet2.png";
import Benifet3 from "../assest/benifet3.png";
import Benifet4 from "../assest/benifet4.png";

const Benifets = () => {
  return (
    <section className="w-9/12 mx-auto py-16">
      <div className="pb-16 w-2/3 md:w-1/2 mx-auto">
        <h1 className="text-white font-bold text-2xl md:text-4xl text-center md:w-3/4 mx-auto  border-b-2 pb-4  border-pink-500">
          MEMBERSHIP
        </h1>
      </div>
      <p className=" text-white text-2xl">
        In addition to taking part in one of the coolest generated-art projects
        in the NFT space, owning a Fat Catz will give you access to exclusive
        benefits.
      </p>
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-x-6 lg:space-x-0 md:space-y-0 pt-16 w-10/12 mx-auto benifet">
        {/* First benifet*/}
        <div className="space-y-6 flex flex-col items-center">
          {/* <img src={Benifet1} alt="" className="" /> */}
          <p className=" font-bold text-benifet  w-2/3">
            Ability to partecipate in community contest and grants for community
            project.
          </p>
        </div>
        {/* 2nd benifet*/}
        <div className="space-y-6 flex flex-col items-center">
          {/* <img src={Benifet2} alt="" className="" /> */}
          <p className=" font-bold text-benifet  w-2/3 ">
            Ownership and commercial usage rights for your owned Fat Catz.
          </p>
        </div>
        {/* 3rd benifet*/}
        <div className="space-y-6 flex flex-col items-center">
          {/* <img src={Benifet3} alt="" className="" /> */}
          <p className=" font-bold text-benifet  w-2/3">
            Access to exclusive drops, giveaways and events, both in the real
            world and in the metaverse.
          </p>
        </div>
        {/* Nextbenifet*/}
        <div className="space-y-6 flex flex-col items-center">
          {/* <img src={Benifet4} alt="" className="" /> */}
          <p className="text-benifet font-bold   w-2/3">
            Each holder has an opportunity to introduce his minted Fat Catz
            character in the comic book/graphic novel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benifets;
