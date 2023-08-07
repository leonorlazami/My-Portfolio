import React from "react";
import pizzaReact from "../assets/portfolio/pizzaReact.jpg";
import todo from "../assets/portfolio/todolist.jpg";
import farAway from "../assets/portfolio/farAway.png";
import eatnSplit from "../assets/portfolio/eatnSplit.png";
import usePopcorn from "../assets/portfolio/usePopcorn.png";
import portofolio from "../assets/portfolio/portofolio.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      source: pizzaReact,
      title: "Fast React Pizza",
    },
    {
      id: 2,
      source: todo,
      title: "Simple to-do",
    },
    {
      id: 3,
      source: farAway,
      title: "Far Away",
    },
    {
      id: 4,
      source: eatnSplit,
      title: "Eat'n'Split",
    },
    {
      id: 5,
      source: usePopcorn,
      title: "usePopcorn",
    },
    {
      id: 6,
      source: portofolio,
      title: "Portofolio",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-custom-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-9 mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, source, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={source}
                alt=""
                className="rounded-md duration-200 hover:scale-105 hover:visible"
              />
              <div className="flex items-center justify-center h-12 ">
                <button className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-110 ">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
