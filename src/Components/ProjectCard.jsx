import React from "react";
import {Link} from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="m-10 md:m-10 flex flex-col items-center justify-between md:flex-row border border-white mb-10 shadow-[0_0_5px_white] rounded-lg p-3 gap-4 hover:shadow-[0_0_15px_white] hover:transition-shadow hover:bg-neutral-600">
      <div>
        <img className="rounded w-full md:w-60 " src={props.i} alt="" />
      </div>
      <div className="flex-1 flex-col gap-1 ">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="font-serif ">{props.h}</h1>
          <p>{props.l}</p>
        </div>
        <div>
          <p className="text-xl font-serif">{props.o}</p>
        </div>
        <div className="flex-col md:flex-row">
          <p>{props.dese}</p>
        </div>
        <div className="flex flex-col items-center m-3">
          <Link to={props.li} className="text-white">
            <button className="border font-xl gap-2 py-3 px-10 md:px-20 lg:px-40 shadow-[0_0_5px_white] font-semibold rounded-full  hover:transition-shadow duration-150 hover:shadow-[0_0_15px_white] hover:scale-110 hover:bg-slate-500 hover:text-black">
              Check Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
