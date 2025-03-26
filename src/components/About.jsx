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
            I’m Nishit Patel, a Web3 Frontend Developer based in Ahmedabad. I
            transitioned from a VMC Machine Programmer to the world of
            blockchain and DeFi applications, bringing precision and
            problem-solving skills from my engineering background into frontend
            development.
          </p>
          <p className="mb-4">
            I specialize in React, Next.js, TypeScript, and Web3 technologies,
            crafting seamless and engaging dApp experiences. My journey began
            with a certified web design training from Tops Technologies Pvt.
            Ltd., followed by advanced ReactJS and Redux specialization at KG
            Coding. Today, I work at Digichain Global Holdings LLC for Bima
            Labs, where I build scalable and interactive DeFi solutions.
          </p>
          <p>
            When I’m not coding, I love exploring the outdoors and embracing new
            challenges. Join me as I continue pushing the boundaries of Web3
            development!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
