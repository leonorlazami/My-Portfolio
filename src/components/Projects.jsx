import React, { useState } from "react";
import quizzler from "../assets/portfolio/quizzler-1.png";
import taskinator from "../assets/portfolio/taskinator-1.png";
import farAway from "../assets/portfolio/far-away-1.png";
import fiftyFifty from "../assets/portfolio/fifty-fifty-1.png";
import usePopcorn from "../assets/portfolio/usepopcorn-1.png";
import magicNum from "../assets/portfolio/magic-num-1.png";

const Projects = () => {
  const [isHoverImg, setIsHoverImg] = useState(false);
  function handleHover(id) {
    setIsHoverImg(id);
  }
  function handleLeave() {
    setIsHoverImg(null);
  }
  const projects = [
    {
      id: 1,
      source: magicNum,
      title: "Magic Number",
      description: "An interesting game which guesses your number using magic.",
      demo: "https://the-magic-num.vercel.app/",
      code: "https://github.com/leonorlazami/theMagicNum",
    },

    {
      id: 2,
      source: taskinator,
      title: "To-do",
      description: "A simple to-do list app.",
      demo: "https://taskinator.vercel.app/",
      code: "https://github.com/leonorlazami/taskinator",
    },
    {
      id: 3,
      source: farAway,
      title: "Far Away",
      description:
        "An app to plan your vacation with with features like adding, completing, removing, and sorting items.",
      demo: "https://far-away-9lc7w7rlw-theleonoir.vercel.app/",
      code: "https://github.com/theLeoNoir/far-away",
    },
    {
      id: 4,
      source: fiftyFifty,
      title: "Fifty/Fifty",
      description:
        "Conveniently split expenses with friends and track payments effortlessly.",
      demo: "https://fifty-fifty.vercel.app/",
      code: "https://github.com/leonorlazami/fifty-fifty",
    },
    {
      id: 5,
      source: usePopcorn,
      title: "usePopcorn",
      description:
        "Explore movies, create your watchlist, and rate films for a personalized movie experience.",
      demo: "https://use-popcorn-sigma.vercel.app/",
      code: "https://github.com/theLeoNoir/usePopcorn",
    },
    {
      id: 6,
      source: quizzler,
      title: "Quizzler",
      description:
        "Craft your quiz experience! Choose difficulty and category for personalized fun.",

      demo: " https://quizzler-henna.vercel.app/",
      code: "https://github.com/leonorlazami/quizzler",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-[#0a0908] w-auto text-white md:h-auto pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="px-2 py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0">
          {projects.map(
            ({ id, source, title, description, demo, code, style }) => (
              <div
                key={id}
                className={`   rounded-2xl  hover:scale-105 duration-500  p-2 bg-gray-800`}
              >
                <div className="h-52 py-1 relative ">
                  <img
                    src={source}
                    alt=""
                    className="p-2 duration-200 h-full w-full  hover:blur hover:opacity-30 ease-in object-cover md:ob "
                    onMouseEnter={() => handleHover(id)}
                    onMouseLeave={handleLeave}
                  />
                  {isHoverImg === id && (
                    <div className="absolute top-6 p-6 flex flex-col gap-4 pointer-events-none">
                      <h2 className="font-bold text-2xl">{title}</h2>
                      <p className="text-md">{description}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center h-4 p-5">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-4 py-3 m-4 duration-150 hover:scale-110 font-bold "
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-4 py-3 m-4 duration-150 hover:scale-110 font-bold "
                  >
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
