import React from "react";
import CarouselMenu from "./CarouselMenu";
import { FaCircleArrowRight } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { FaSuitcase } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Contact from '../Components/Contact'

const Project = () => {
  const handleDownload = () => {
    const pdfUrl = "../Pdf/Aravinth Raj R.pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aravinth Raj R.pdf"; 
    link.click();
  };

  return (
    <div className="container mx-auto my-24">
      <div className="text-3xl text-white md:text-5xl font-cavet font-extrabold text-center mb-5 drop-shadow-[0_0_5px_white]">
        RECENT
      </div>
      <div className="text-3xl text-white md:text-5xl font-cavet font-extrabold text-center mb-5 drop-shadow-[0_0_5px_white]">
        PROJECTS
      </div>
      <CarouselMenu />
      <div className="flex justify-around">
        <div className="flex gap-2 items-center text-xl mt-20 ">
          Check out
          <Link
            className="text-white font-bold underline underline-offset-8 hover:scale-110 hover:transition-transform hover:duration-200"
            to="/project"
          >
            my latest projects
          </Link>
          <FaCircleArrowRight />
        </div>
      </div>
      <div className="flex flex-col items-center t-10  justify-around md:flex-row md:mx-52 my-16 gap-6">
        <div>
          <Link className="text-white font-bold no-underline underline-offset-8" to='/contact'>
            <button className="border font-xl flex items-center gap-2 py-3 px-10 lg:px-20 shadow-[0_0_5px_white] font-semibold rounded-lg  hover:shadow-[0_0_15px_white] hover:scale-110 hover:transition-shadow duration-150 hover:bg-slate-500 hover:text-black">
              Hire Me
              <FaSuitcase className="text-black" />
            </button>
          </Link>
        </div>
        <div>
          <Link className="text-white font-bold no-underline underline-offset-8" to='/'>
            <button
              onClick={handleDownload}
              className="border flex items-center gap-2 py-3 px-4 lg:px-12 shadow-[0_0_5px_white] font-semibold rounded-lg  hover:shadow-[0_0_15px_white] hover:scale-110 hover:transition-shadow duration-150 hover:bg-slate-500 hover:text-black"
            >
              Download My Resume
              <RxDownload className="text-black" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
