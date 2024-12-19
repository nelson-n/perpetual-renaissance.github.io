
import React, { useState, useEffect } from "react";

const LandingPage = () => {
  // State to control animation visibility
  const [imagesVisible, setImagesVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [face2Visible, setFace2Visible] = useState(false);

  // Trigger the animation when the component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImagesVisible(true);
      setTextVisible(true);
    }, 300); // Delay to make the animation more graceful

    const secondTimeout = setTimeout(() => {
      setFace2Visible(true);
    }, 1000); // Delay for the second section animation

    return () => {
      clearTimeout(timeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (




    <div className="bg-white text-black font-sans">


      {/* Text Section */}
      <div className="flex justify-center mt-12 space-x-8">
        <span
          className={`text-6xl lg:text-7xl font-bold transform transition-all duration-[2000ms] ease-in-out ${
            textVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          Perpetual
        </span>
        <span
          className={`text-6xl lg:text-7xl font-light transform transition-all duration-[2000ms] ease-in-out ${
            textVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          Renaissance
        </span>
      </div>

      {/* Images Section */}
      <div className="flex justify-center mt-0 space-x-8 items-center min-h-[50vh]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_Face1.png`}
          alt="PR02 Face"
          className={`w-1/2 max-w-md transform transition-all duration-[2000ms] ease-in-out ${
            imagesVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_Back1.png`}
          alt="PR02 Back"
          className={`w-1/2 max-w-md transform transition-all duration-[2000ms] ease-in-out ${
            imagesVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />
      </div>





  {/* Spacer before PR02_Face2 Section */}
  <div className="h-16 lg:h-12"></div>





{/* PR02_Face2 Section */}
<div className="bg-black text-accent flex flex-col lg:flex-row justify-center items-center w-full py-24 lg:space-x-12">
  {/* Image */}
  <img
    src={`${process.env.PUBLIC_URL}/assets/PR02_Back2.png`}
    alt="PR02 Face 2"
    className={`w-3/4 lg:w-1/2 max-w-2xl transform transition-all duration-[2000ms] ease-in-out ${
      face2Visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
  />

  {/* Text */}
  <p
    className={`mt-8 lg:mt-0 text-center lg:text-left text-lg sm:text-xl lg:text-3xl font-light transition-all duration-[2000ms] ease-in-out ${
      face2Visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    } max-w-prose`}
  >
    A returnal to the time when everything <br />
    was new and exciting. Perpetually being<br />
    captivated by the beauty and intricacy <br />
    of the Universe.
  </p>
</div>





      {/* PR02_Back2 Section */}
      <div className="bg-white text-black flex flex-col lg:flex-row justify-center items-center mt-16 lg:space-x-8 lg:w-2/3 mx-auto py-12">
        {/* Text */}
        <p
          className={`mt-8 lg:mt-0 text-center lg:text-left text-lg sm:text-xl lg:text-3xl font-light transition-all duration-[2000ms] ease-in-out ${
            face2Visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } max-w-prose`}
        >
          A returnal to the time when everything was <br />
          new and exciting. Perpetually being captivated<br />
          captivated by the beauty and intricacy <br />
          of the Universe.
        </p>
        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_Back2.png`}
          alt="PR02 Back 2"
          className={`w-4/5 lg:w-1/3 max-w-lg transform transition-all duration-[2000ms] ease-in-out ${
            face2Visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default LandingPage;
