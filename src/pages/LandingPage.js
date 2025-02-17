import React from "react";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {

  {/* Section Load Triggers */}
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-white text-black font-sans">

    {/* Vertical Spacer */}
    <div className="h-16 lg:h-16"></div>

    {/* First Image Section */}
    <div
      ref={firstSectionRef}
      className="flex flex-row justify-center mt-0 items-center min-h-[50vh]"
    >
      {/* 
      <img
        src={`${process.env.PUBLIC_URL}/assets/PR02_Face1.png`}
        alt="Perpetual Renaissance"
        className={`w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 max-w-md transform transition-all duration-[2000ms] ease-in-out ${
          firstSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/PR02_Back1.png`}
        alt="Perpetual Renaissance"
        className={`w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 max-w-md transform transition-all duration-[2000ms] ease-in-out ${
          firstSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      />
      */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/PR02_Face5.png`}
        alt="Perpetual Renaissance"
        className={`w-full max-w-6xl transform transition-all duration-[2000ms] ease-in-out ${
          firstSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      />
    </div>

    {/* Vertical Spacer */}
    <div className="h-16 lg:h-16"></div>

    {/* Second Image Section (Black) */}
    <div
      ref={secondSectionRef}
      className="bg-black text-accent flex flex-col lg:flex-row justify-center items-center w-full py-48 px-4 lg:px-16 lg:space-x-24"
    >
      {/* Image */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/PR02_Back4.png`}
        alt="Perpetual Renaissance"
        className={`w-5/6 lg:w-1/2 max-w-4xl transform transition-all duration-[2000ms] ease-in-out ${
          secondSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      />

      {/* Text */}
      <div
        className={`mt-8 lg:mt-0 text-center lg:text-left transition-all duration-[2000ms] ease-in-out ${
          secondSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } max-w-prose`}
      >
        {/* Header */}
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-4">
          Horological Art for the Modern World
        </h2>
        
        {/* Subtext */}
        <p className="text-lg sm:text-xl lg:text-2xl font-light text-white">
          Combining cutting edge materials science with a reverence for historic calibers, Perpetual Renaissance is dedicated to producing horological objects that inspire beauty.
          Designed to evoke a sense of wonder in the everyday, each watch reflects a union of artistry and performance.
      
        </p>
      </div>
    </div>

    {/* Third Image Section (White) */}
    <div
      ref={thirdSectionRef}
      className="bg-white text-black flex flex-col lg:flex-row justify-center items-center w-full py-12 px-4 lg:px-16 lg:space-x-24"
    >
      {/* Text */}
      <div
        className={`mt-8 lg:mt-0 text-center lg:text-left transition-all duration-[2000ms] ease-in-out ${
          thirdSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } max-w-prose`}
      >
        {/* Header */}
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-4">
          Inspired by Beauty
        </h2>
        
        {/* Subtext */}
        <p className="text-lg sm:text-xl lg:text-2xl font-light text-black">
        At Perpetual Renaissance we aim to produce objets d’art that stop time and still the world to a point of clarity. Watches that both inspire beauty and are inspired by beauty. 
        </p>
      </div>

      {/* Image */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/PR02_Face6.png`}
        alt="Perpetual Renaissance"
        className={`w-5/6 lg:w-1/2 max-w-4xl transform transition-all duration-[2000ms] ease-in-out ${
          thirdSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      />
    </div>

    {/* Vertical Spacer */}
    <div className="h-16 lg:h-16"></div>

    </div>
  );
};

export default LandingPage;
