import React from "react";
import HeroImage from "../assets/leo3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-5">
          <h2 className="text-3xl sm:text-5xl font-bold text-white pt-20">
            Hi, I'm Leonor
          </h2>
          <h3 className="text-white">Front-end Developer</h3>
          <p className="text-gray-400 py-4 max-w-md">
            I'm passionate about creating visually appealing and user-friendly
            digital experiences. My journey in web development began with a
            strong interest in IT and a desire to bring my ideas to life on the
            web. Through projects that blend creativity and functionality, I've
            honed my skills in HTML, CSS, and JavaScript, with a focus on React.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
             bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={23} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto w-2/3 md:1/2 pb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
