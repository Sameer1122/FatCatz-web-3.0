import React from "react";
import Person1 from "../assest/team1.png";
import Person2 from "../assest/team2.png";
import Person3 from "../assest/team3.png";
import Person4 from "../assest/team4.png";

const Team = () => {
  return (
    <section className="w-9/12 mx-auto py-16" id="team">
      <div className="space-y-8">
        <div className="pb-16 w-2/3 md:w-1/2 mx-auto">
          <h1 className="text-white font-bold text-2xl md:text-4xl text-center md:w-3/4 mx-auto  border-b-2 pb-4  border-pink-500">
            FAT CATZ TEAM
          </h1>
        </div>
        <p className="text-white text-2xl">
          It's time to give life to these Catz that for too long have waited
          between the pages of sketches thrown in the bottom of some drawer. Now
          the Fat Catz are here and claiming their glory, we're just helping
          them get their due.
        </p>
      </div>
      {/*  Team Member*/}
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-x-6 lg:space-x-4 md:space-y-0 pt-16">
        {/* First Team Member*/}
        <div className="space-y-6" data-aos="zoom-in-up">
          <img src={Person1} alt="" className="rounded-full" />
          <h3 className="text-white font-bold text-2xl text-center">
            Fat Boss
          </h3>
        </div>
        {/* 2nd Team Member*/}
        <div className="space-y-6" data-aos="zoom-in-up">
          <img src={Person2} alt="" className="rounded-full" />
          <h3 className="text-white font-bold text-2xl text-center ">
            Pilot Cat
          </h3>
        </div>
        {/* 3rd Team Member*/}
        <div className="space-y-6" data-aos="zoom-in-up">
          <img src={Person3} alt="" className="rounded-full" />
          <h3 className="text-white font-bold text-2xl text-center">
            Fat Lennon
          </h3>
        </div>
        {/* NextTeam Member*/}
        <div className="space-y-6" data-aos="zoom-in-up">
          <img src={Person4} alt="" className="rounded-full" />
          <h3 className="text-white font-bold text-2xl text-center">Bad Cat</h3>
        </div>
      </div>
    </section>
  );
};

export default Team;
