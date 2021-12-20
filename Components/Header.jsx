import React from "react";

const Header = () => {
  return (
    <section className="header h-headerSm md:h-headerMd mb-16" id="home">
      <div className="flex justify-end w-9/12 mx-auto items-center py-16  md:py-40">
        <div className="md:w-1/3 space-y-4">
          <h1 className="text-black text-3xl lg:text-5xl font-bold leading-tight">
            {/* Welcome to the Fat Catz <br /> */}
          </h1>
          <p className="text-black font-semibold">
            {/* 9,999 Catz who love to eat and are not interested to lose weight.
            Become a member and write with us the history of Fat Catz, let the
            adventure begin. */}
          </p>
          {/* <button className="buttonHeader hover:bg-transparent border border-transparent hover:border-white">
            Buy on Opensa
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
