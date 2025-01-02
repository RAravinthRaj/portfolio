import React from 'react';
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
 
const BlogButton = () => {
    return (
        <div>
            <div className="flex justify-around">
          <div className="flex gap-2 items-center text-xl mt-18 mb-20">
            Want to
            <Link
              className="text-white font-bold underline underline-offset-8 hover:scale-110 hover:transition-transform hover:duration-200"
              to="/blog"
              target="_blank"
            >
              know more??
            </Link>
            <FaCircleArrowRight />
          </div>
        </div>
        </div>
    );
}
 
BlogButton.propTypes = {};
 
export default BlogButton;