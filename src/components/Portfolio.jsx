import brand_page from "../assets/portfolio/brand_page.png";
import contact_page from "../assets/portfolio/contact_page.png";

import crypto_dashboard from "../assets/portfolio/crypto_dashboard.png";
import dashboard_auth from "../assets/portfolio/dashboard_auth.png";
import Dice_game from "../assets/portfolio/Dice_game.png";
import foodyzone from "../assets/portfolio/foodyzone.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: brand_page,
      title: "Brand Page",
      codeLink: "https://github.com/nishitgit8387/react-brand-page",
    },
    {
      id: 2,
      src: contact_page,
      title: "Contact Page",
      codeLink: "https://github.com/nishitgit8387/react-contectus-page",
    },
    {
      id: 3,
      src: Dice_game,
      title: "Dice Game",
      codeLink: "https://github.com/nishitgit8387/react-dice-game",
    },
    {
      id: 4,
      src: crypto_dashboard,
      title: "Crypto Dashboard",
      codeLink: "https://github.com/nishitgit8387/react-crypto-dashboard",
    },
    {
      id: 5,
      src: dashboard_auth,
      title: "Dashboard Authentication",
      codeLink:
        "https://github.com/nishitgit8387/react-dashboard-authentication",
    },
    {
      id: 6,
      src: foodyzone,
      title: "Foody Zone",
      codeLink: "https://github.com/nishitgit8387/react-foody-zone",
    },
  ];
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
          {portfolios.map(({ id, src, title, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-[100%] h-[200px] duration-200 hover:scale-105"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3 className="hidden md:block text-xl mt-2 font-bold">
                    {title}
                  </h3>
                  <button
                    className="w-[90%] bg-blue-600 rounded-md px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => openCode(codeLink)}
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
