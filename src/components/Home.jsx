import { MdKeyboardArrowRight } from "react-icons/md";
import profile from "../assets/images/profile.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-auto w-full pt-12 bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl leading-none sm:text-6xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4">
            Enthusiastic and detail-oriented fresher frontend developer with
            hands-on experience in HTML, CSS, JavaScript, and React. Proficient
            in creating responsive and user-friendly web interfaces. Eager to
            contribute to dynamic teams and learn new technologies.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
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
