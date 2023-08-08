import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwindcss from "../assets/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactJS,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: Tailwindcss,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-200",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mt-7">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto mt-7" />
              <div className="flex items-center justify-center">
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
