import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-custom-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-5">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Hi, I'm Leonor Lazami
          </h2>
          <h3 className="text-white">Front-end Developer</h3>
          <p className="text-gray-500 py-4 max-w-md mr-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim
            labore neque iusto quibusdam omnis itaque molestiae dolor nobis
            quia. Est nihil accusantium modi necessitatibus veritatis dolore
            dolorum suscipit itaque?
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
            className="rounded-2xl mx-auto max-w-full w-1 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
