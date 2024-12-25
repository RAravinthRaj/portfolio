import React from "react";

const ServiceCard = (props)=> {
  return (
    <div>
      <div className="flex-1 flex-col text-center shadow-[0_0_5px_white] rounded-lg space-y-5 p-3 md:p-5 border-2 border-white  hover:shadow-[0_0_25px_white] hover:transition duration-200 hover:scale-105">
        <div className="flex flex-col items-center">
          <img
            className="flex flex-col items-center h-52 w-52 rounded-full"
            src={props.i}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl font-serif font-semibold">{props.h}</h1>
        </div>
        <div>
          <p>{props.des}</p>
        </div>
      </div>
    </div>
  );
};


export default ServiceCard;
