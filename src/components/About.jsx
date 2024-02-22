import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0 md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-md md:text-xl mt-20 mb-8">
          <p className="mb-4">
            My name is Nishit Patel. I am from Ahmedabad. I am a Diploma
            Mechanical Dropout from GTU. I have 5 years of experience as a VMC
            Machine Programmer. I would like to change my field from VMC
            Programmer to Web developer.
          </p>
          <p className="mb-4">
            I have completed certified training in web design from Tops
            Technologies Pvt. Ltd., Ahmedabad, and specialized in ReactJS and
            Redux through KG Coding. With a solid foundation and a hunger for
            learning, I'm excited to dive into the world of frontend development
            and create engaging digital experiences.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the outdoors. Join me
            as I embark on this exciting journey into the realm of web
            development!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
