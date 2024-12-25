import React ,{useRef} from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SkillsButton = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div className="flex gap-2 items-center text-xl mt-8" to="/">
          Check out
          <Link
            className="text-white font-bold underline underline-offset-8 hover:scale-110 hover:transition-transform hover:duration-200"
            to="/service"
          >
            my skills
          </Link>
          <FaCircleArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SkillsButton;
