import React from "react";
import Image from "../images/hero1.png";

const Hero = () => {
  return (
    <div className="container mx-auto flex items-center mb-10">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <img
            src={Image}
            alt=""
            className="m-2 h-full drop-shadow-[0_0_5px_white] lg:h-svh hover:drop-shadow-[0_0_25px_white]"
          />
          <h1 className="text-6xl text-white md:text-8xl font-bebas font-extrabold text-center mb-5">
            <span className="drop-shadow-[0_0_5px_white]">
              Heyy There! This is Aravinth
            </span>
            <p className="text-white text-2xl font-serif mt-5">
              Responsive Web Designer | Front End Developer
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
