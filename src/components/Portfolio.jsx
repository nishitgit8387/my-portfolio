import gemini_clone from "../assets/portfolio/gemini_clone.png";
import youtube_clone from "../assets/portfolio/youtube_clone.png";
import crypto_dashboard from "../assets/portfolio/crypto_dashboard.png";
import chat_app from "../assets/portfolio/chat_app.png";
import Dice_game from "../assets/portfolio/Dice_game.png";
import ecom from "../assets/portfolio/ecom.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gemini_clone,
      title: "Gemini Clone",
      previewLink: "https://reactjs-gemini-clone.vercel.app/",
      codeLink: "https://github.com/nishitgit8387/reactjs-gemini-clone",
    },
    {
      id: 2,
      src: youtube_clone,
      title: "Youtube Clone",
      previewLink: "https://react-youtube-clone-rho-nine.vercel.app/",
      codeLink: "https://github.com/nishitgit8387/react-youtube-clone",
    },
    {
      id: 3,
      src: chat_app,
      title: "Chat App",
      previewLink:
        "https://react-chat-6vrosuf6l-nishit-patels-projects-42befa19.vercel.app/",
      codeLink: "https://github.com/nishitgit8387/react-chat-app",
    },
    {
      id: 4,
      src: ecom,
      title: "E-Commerce",
      previewLink: "https://react-e-commerce-opal-nine.vercel.app/",
      codeLink: "https://github.com/nishitgit8387/react-e-commerce",
    },
    {
      id: 5,
      src: crypto_dashboard,
      title: "Crypto Dashboard",
      codeLink: "https://github.com/nishitgit8387/react-crypto-dashboard",
    },
    {
      id: 6,
      src: Dice_game,
      title: "Dice Game",
      codeLink: "https://github.com/nishitgit8387/react-dice-game",
    },
  ];

  const openPreview = (previewLink) => {
    window.open(previewLink, "_blank");
  };

  const openCode = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-auto text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, codeLink, previewLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md w-full h-52 object-cover duration-200 hover:scale-105"
              />
              <div className="flex flex-col justify-center items-center">
                <h3 className="hidden md:block text-xl mt-2 font-bold">
                  {title}
                </h3>
                <div className="buttons flex justify-around">
                  {previewLink && (
                    <>
                      <button
                        className="w-[50%] bg-green-500 rounded-md px-4 py-3 m-2 duration-200 hover:scale-105"
                        onClick={() => openPreview(previewLink)}
                      >
                        Preview
                      </button>
                      <button
                        className="w-[50%] bg-blue-500 rounded-md px-4 py-3 m-2 duration-200 hover:scale-105"
                        onClick={() => openCode(codeLink)}
                      >
                        Code
                      </button>
                    </>
                  )}
                  {!previewLink && (
                    <button
                      className="w-[100%] bg-blue-500 rounded-md px-6 py-3 m-2 duration-200 hover:scale-105"
                      onClick={() => openCode(codeLink)}
                    >
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
