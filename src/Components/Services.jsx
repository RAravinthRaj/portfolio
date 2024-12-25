import React from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ skill },{isHome}) => {
  const data = skill;
  return (
    <div className="m-10">
      <div className="text-center">
        <h1 className="text-2xl mb-7 md:text-4xl font-bold font-serif">
          I do Amazing Things
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-16">
        {data.map((d) => (
          <ServiceCard i={d.image} h={d.heading} des={d.description} />
        ))}
      </div>
      </div>
  );
};

export default Services;
