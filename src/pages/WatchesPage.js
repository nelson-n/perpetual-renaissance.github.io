
import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const WatchesPage = () => {
  {/* Section Load Triggers */}
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">

      {/* Watch Image Section */}
      <div className="relative flex justify-center items-center w-full h-full">

        {/* PR02 Image */}
        <Link to="/PR02" ref={imageRef} className="flex justify-center items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/PR02_Back4.png`}
            alt="Perpetual Renaissance"
            className={`w-5/6 lg:w-1/2 max-w-none transform transition-all duration-[2000ms] ease-in-out hover:shadow-2xl cursor-pointer ${
              imageInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          />
        </Link>

        {/* PR02 Text Overlay */}
        <div
          ref={textRef}
          className={`absolute text-white font-bold text-8xl sm:text-8xl md:text-8xl lg:text-9xl transform transition-all duration-[2000ms] ease-in-out ${
            textInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } flex justify-center items-center`}
        >
          <Link
            to="/PR02"
            className="hover:text-copperAccent transition-all duration-300"
          >
            PR02
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatchesPage;
