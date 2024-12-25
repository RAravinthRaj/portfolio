import React from "react";
import Dropdown from "../Components/DropDown";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="m-3 md:m-10">
      <div className="container flex flex-col items-center mx-auto border border-white mb-10 rounded-lg p-4 effect hover:shadow-[0_0_25px_white] hover:transition-shadow hover:duration-200">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-5xl font-bebas font-bold text-center mb-3">
            Contact Me
          </div>
          <div className="text-2xl md:text-4xl font-bebas font-extrabold text-center mb-5 ">
            Swing by for a cup of coffee or leave me a message
          </div>
        </div>

        <div className="flex flex-col justify-between items-center md:flex-row gap-20">
          <div className="flex-1 flex-col items-start ">
            <img
              className="h-auto md:m-8 rounded-lg hover:shadow-[0_0_25px_white] hover:transition-shadow hover:duration-200"
              src="https://www.google.com/maps/vt/data=h9OaW48L8nagc3KTaBIVA52RZuxegfuPuH-Ad4QFRfv0SWYbdfojHpgMmfPAnCF4BNaisNrru5lc7d9wqsqcyj5HX07AFbnctY6L-CtD5BzZQQ87B3wfC45SaWyvLpLQKFW8S_px6tseYg6KYDIZAN67GwcbxneVjqXQEPCjgTEpNXwmRYgTm06hkkl51inbDn6cwT6KKY_zAQkDLBnWduwMUgRTZY2W5oyL4lGeD9sZnAOpxEW5I8W4iwU9MHCvlVxihaTRAwAmOhsm-OqRsA0zf9YvZhOkFpIHVEcYJEE"
              alt=""
            />
          </div>
          <div className="flex-1 flex-col font-cavet items-center space-y-10">
            <div>
              <h5 className="text-md">First Name</h5>
              <input
                type="text"
                className="w-full font-serif h-10 border border-black p-2 text-black hover:shadow-[0_0_15px_white] hover:transition-shadow hover:duration-200 rounded-lg"
                placeholder="Your FirstName"
              />
            </div>
            <div>
              <h5 className="text-md">Last Name</h5>
              <input
                type="text"
                className="w-full font-serif h-10 border border-black p-2 text-black hover:shadow-[0_0_15px_white] hover:transition-shadow hover:duration-200 rounded-lg"
                placeholder="Your LastName"
              />
            </div>

            <div>
              <h5 className="text-md">Location</h5>
              <Dropdown />
            </div>
            <div>
              <h5 className="text-md">Tell Me Something</h5>
              <textarea className="h-32 w-full text-black font-serif p-2 text-lg rounded-lg"></textarea>
            </div>
            <div>
              <button className="bg-white text-black text-md font-serif p-2 px-5 rounded-lg hover:shadow-[0_0_15px_white] hover:transition-shadow hover:duration-200">
                Submit
              </button>
            </div>
            <div className="flex items-center text-center gap-16 mt-4">
              <div className="flex gap-2 h-10">
                <Link
                  to="https://www.linkedin.com/in/aravinth-raj-r-868963288/"
                  className="hover:scale-150 hover:transition-transform hover:duration-200"
                >
                  <AiFillLinkedin size={25} />
                </Link>
                <Link
                  to=""
                  className="hover:scale-150 hover:transition-transform hover:duration-200"
                >
                  <FaSquareInstagram size={25} />
                </Link>
                <Link
                  to=""
                  className="hover:scale-150 hover:transition-transform hover:duration-200"
                >
                  <FaTwitter size={25} />
                </Link>
                <Link
                  to=""
                  className="hover:scale-150 hover:transition-transform hover:duration-200"
                >
                  <FaFacebookF size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
