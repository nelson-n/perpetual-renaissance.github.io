
import React from "react";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  // Consolidated intersection observer
  const { ref: brandRef, inView: brandInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
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
      <div className="h-2 lg:h-1"></div>


{/* Brand Name Section */}
<div
  ref={brandRef}
  className="flex flex-col md:flex-row justify-center mt-12 space-y-4 md:space-y-0 md:space-x-8 items-center"
>
  <span
    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transform transition-all duration-[2000ms] ease-in-out ${
      brandInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }`}
  >
    Perpetual
  </span>
  <span
    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light transform transition-all duration-[2000ms] ease-in-out ${
      brandInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
  >
    Renaissance
  </span>
</div>






      {/* Vertical Spacer */}
      <div className="h-16 lg:h-10"></div>



{/* First Image Section */}
<div
  ref={firstSectionRef}
  className="flex flex-col md:flex-row justify-center mt-0 space-y-4 md:space-y-0 md:space-x-8 items-center min-h-[50vh]"
>
  <img
    src={`${process.env.PUBLIC_URL}/assets/PR02_Face1.png`}
    alt="PR02 Face"
    className={`w-3/4 sm:w-1/2 md:w-1/3 max-w-md transform transition-all duration-[2000ms] ease-in-out ${
      firstSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }`}
  />
  <img
    src={`${process.env.PUBLIC_URL}/assets/PR02_Back1.png`}
    alt="PR02 Back"
    className={`w-3/4 sm:w-1/2 md:w-1/3 max-w-md transform transition-all duration-[2000ms] ease-in-out ${
      firstSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
  />
</div>





{/* First Image Bottom Text */}
<div
  className="bg-white text-black flex justify-center items-center w-full py-12 px-4"
>
  <p
    className={`text-center text-base sm:text-lg md:text-xl lg:text-3xl font-light transition-all duration-[2000ms] ease-in-out ${
      firstSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    } max-w-prose`}
  >
    A journey through timeless elegance and <br />
    intricate craftsmanship.
  </p>
</div>









      {/* Vertical Spacer */}
      <div className="h-32 lg:h-32"></div>

      {/* Second Image Section (Black) */}
      <div
        ref={secondSectionRef}
        className="bg-black text-accent flex flex-col lg:flex-row justify-center items-center w-full py-48 lg:space-x-24"
      >
        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_Back2.png`}
          alt="PR02 Face 2"
          className={`w-3/4 lg:w-1/2 max-w-2xl transform transition-all duration-[2000ms] ease-in-out ${
            secondSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />

        {/* Text */}
        <p
          className={`mt-8 lg:mt-0 text-center lg:text-left text-lg sm:text-xl lg:text-3xl font-light transition-all duration-[2000ms] ease-in-out ${
            secondSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } max-w-prose`}
        >
          A returnal to the time when everything <br />
          was new and exciting. Perpetually being<br />
          captivated by the beauty and intricacy <br />
          of the Universe.
        </p>
      </div>

      {/* Third Image Section (White) */}
      <div
        ref={thirdSectionRef}
        className="bg-white text-black flex flex-col lg:flex-row justify-center items-center w-full py-48 lg:space-x-24"
      >
        {/* Text */}
        <p
          className={`mt-8 lg:mt-0 text-center lg:text-left text-lg sm:text-xl lg:text-3xl font-light transition-all duration-[2000ms] ease-in-out ${
            thirdSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } max-w-prose`}
        >
          A returnal to the time when everything <br />
          was new and exciting. Perpetually being<br />
          captivated by the beauty and intricacy <br />
          of the Universe.
        </p>

        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_Face2.png`}
          alt="PR02 Face 2"
          className={`w-3/4 lg:w-1/2 max-w-2xl transform transition-all duration-[2000ms] ease-in-out ${
            thirdSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />
      </div>

      {/* Vertical Spacer */}
      <div className="h-16 lg:h-16"></div>
    </div>
  );
};

export default LandingPage;
