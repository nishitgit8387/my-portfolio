import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import js from "../assets/experience/js.png";
import react from "../assets/experience/react.png";
import redux from "../assets/experience/redux.png";
import tailwind from "../assets/experience/tailwind.png";
import web3js from "../assets/experience/web3js.jpg";
import typescript from "../assets/experience/typescript.png";
import github from "../assets/experience/github.png";
import wagmi from "../assets/experience/wagmi.jpg";
import rainbow from "../assets/experience/rainbow.svg";
import next from "../assets/experience/next.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: next,
      title: "NEXT",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: redux,
      title: "REDUX",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: typescript,
      title: "TYPESCRIPT",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TAILWIND CSS",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: web3js,
      title: "Web3 JS",
      style: "shadow-sky-300",
    },
    {
      id: 10,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: wagmi,
      title: "Wagmi",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: rainbow,
      title: "Rainbow kit",
      style: "shadow-sky-300",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-6 h-auto md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-between rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto rounded-md" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
