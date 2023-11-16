import React from "react";
import quizzler from "../assets/portfolio/quizzler.png";
import todo from "../assets/portfolio/todo.png";
import farAway from "../assets/portfolio/far-away.png";
import fiftyFifty from "../assets/portfolio/fifty-fifty.png";
import usePopcorn from "../assets/portfolio/usePopcorn .png";
import magicNum from "../assets/portfolio/magic-num.png";

const Projects = () => {
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
      source: todo,
      title: "To-do",
      description: "A simple to-do list app.",
      demo: "https://todo-list-one-amber.vercel.app/",
      code: "https://github.com/theLeoNoir/todo-list",
    },
    {
      id: 3,
      source: quizzler,
      title: "Quizzler",
      description:
        "Quizzler is a web application designed for interactive quizzes. Users can select the difficulty level and category of questions, providing an engaging quiz experience.",
      demo: " https://quizzler-henna.vercel.app/",
      code: "https://github.com/leonorlazami/quizzler",
    },
    {
      id: 4,
      source: farAway,
      title: "Far Away",
      description:
        "An app to plan your vacation with with features like adding, completing, removing, and sorting items.",
      demo: "https://far-away-9lc7w7rlw-theleonoir.vercel.app/",
      code: "https://github.com/theLeoNoir/far-away",
    },
    {
      id: 5,
      source: fiftyFifty,
      title: "Fifty/Fifty",
      description:
        "Conveniently split expenses with friends and track payments effortlessly.",
      demo: "https://fifty-fifty.vercel.app/",
      code: "https://github.com/leonorlazami/fifty-fifty",
    },
    {
      id: 6,
      source: usePopcorn,
      title: "usePopcorn",
      description:
        "Explore movies, create your watchlist, and rate films for a personalized movie experience.",
      demo: "https://use-popcorn-sigma.vercel.app/",
      code: "https://github.com/theLeoNoir/usePopcorn",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-[#0a0908] w-full text-white md:h-screen pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-9 mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, source, title, description, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg max-h-[20rem]"
            >
              <div className="card h-64">
                <img
                  src={source}
                  alt=""
                  className="rounded-md duration-200 object-scale-down h-full w-full bg-center"
                />
                <div className="card__content">
                  <p className="card__title">{title}</p>
                  <p className="card__description font-bold">{description}</p>
                </div>
              </div>

              <div className="flex items-center justify-center h-12 ">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-110"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-110"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
