import { MdKeyboardArrowRight } from "react-icons/md";
import profile from "../assets/images/profile.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-auto w-full pt-12 bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col gap-5 items-center justify-center md:justify-between h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center text-center md:text-left h-full order-2 w-full md:w-[65%]">
          <h2 className="text-[20px]  sm:text-[32px] font-semibold text-white">
            I'm a web3 Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 text-start">
            Motivated Web3 frontend developer with 1 year of experience
            specializing in UI development and wallet integration. Proficient in
            Next.js, TypeScript, JavaScript, React.js, and Tailwind CSS, with a
            strong focus on building responsive and user-friendly interfaces.
            Experienced in integrating wallet modals, enhancing Web3 user
            experiences. Skilled in implementing decentralized UI components,
            DeFi dashboards, and interactive elements. Passionate about creating
            seamless, intuitive designs while continuously improving Web3 and
            frontend expertise.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center md:justify-start rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="order-1 w-full md:w-[35%] ">
          <img
            src={profile}
            alt="My profile"
            className="mt-3 rounded-md md:rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
