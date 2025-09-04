import React from "react";
import { useInView } from "react-intersection-observer";
import useImagePreloader from "../hooks/useImagePreloader";
import ImagePreloader from "../components/ImagePreloader";

const PR02Page = () => {
  // Image URLs to preload
  const imageUrls = [
    `${process.env.PUBLIC_URL}/assets/PR02_COE_HAND1.jpg`,
    `${process.env.PUBLIC_URL}/assets/PR02_COE_FACE4.jpg`,
    `${process.env.PUBLIC_URL}/assets/PR02_COE_BACK1.jpg`
  ];

  // Use image preloader hook
  const { imagesLoaded, loadingProgress } = useImagePreloader(imageUrls);

  {/* Section Load Triggers */}
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: firstImageRef, inView: firstImageInView } = useInView({
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

  const { ref: fourthSectionRef, inView: fourthSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Show loading spinner until all images are loaded
  if (!imagesLoaded) {
    return <ImagePreloader loadingProgress={loadingProgress} />;
  }

  return (
    <div className="bg-white text-black font-sans">

      {/* Header Section */}
      <div
        ref={headerRef}
        className={`text-center text-9xl sm:text-9xl md:text-9xl lg:text-10xl font-bold pt-20 transform transition-all duration-[2000ms] ease-in-out ${
          headerInView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        PR 02
      </div>

      {/* First Section (Gray Background) */}
      <div
        ref={secondSectionRef}
        className="bg-accent text-black flex flex-col lg:flex-row items-center justify-center w-full px-8 lg:px-16 space-y-12 lg:space-y-0 lg:space-x-12"
      >
        {/* Text */}
        <div
          className={`text-lg sm:text-xl lg:text-2xl font-light transform transition-all duration-[2000ms] ease-in-out ${
            secondSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } max-w-prose text-center lg:text-left`}
        >
          <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Beauty and Performance
          </h2>
          The flagship watch from Perpetual Renaissance, the PR 02 is an expression of the brand's dedication to beauty and performance. The slim and lightweight design of the PR 02 ensures unparalleled comfort and performance while the signature cerulean case exemplifies the Perpetual Renaissance brand.
        </div>

        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_COE_HAND1.jpg`}
          alt="Perpetual Renaissance"
          className={`w-5/6 lg:w-1/2 max-w-4xl transform transition-all duration-[2000ms] ease-in-out ${
            secondSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />
      </div>

      {/* Second Section */}
      <div
        ref={thirdSectionRef}
        className="bg-black text-copperAccent flex flex-col lg:flex-row items-center justify-center w-full px-8 lg:px-16 space-y-12 lg:space-y-0 lg:space-x-12"
      >
        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_COE_FACE4.jpg`}
          alt="Perpetual Renaissance"
          className={`w-4/6 lg:w-1/3 max-w-4xl transform transition-all duration-[2000ms] ease-in-out ${
            thirdSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />

        {/* Text */}
        <div
          className={`text-lg sm:text-xl lg:text-2xl font-light transform transition-all duration-[2000ms] ease-in-out ${
            thirdSectionInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } max-w-prose text-center lg:text-left`}
        >
          <h2 className="text-5xl sm:text-5xl lg:text-5xl font-bold text-copperAccent mb-6">
            Specifications 
          </h2>
          <div className="text-base sm:text-lg lg:text-lg">
          Height: <span className="font-medium">33.4 mm</span>
          <br />
          <br />
          Height (Lug to Lug): <span className="font-medium">40.4 mm</span>
          <br />
          <br />
          Width: <span className="font-medium">36.8 mm</span>
          <br />
          <br />
          Thickness: <span className="font-medium">6.0 mm</span>
          <br />
          <br />
          Weight (No Strap): <span className="font-medium">15.0 g</span>
          <br />
          <br />
          Weight (w/ Strap): <span className="font-medium">22.0 g</span>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div
        ref={fourthSectionRef}
        className="bg-black text-copperAccent flex flex-col lg:flex-row items-center justify-center w-full py-0 px-8 lg:px-16 space-y-12 lg:space-y-0 lg:space-x-12"
      >
        {/* Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_COE_BACK1.jpg`}
          alt="Perpetual Renaissance"
          className={`w-5/6 lg:w-1/2 max-w-4xl transform transition-all duration-[2000ms] ease-in-out ${
            fourthSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        />

        {/* Text */}
        <div
          className={`text-lg sm:text-xl lg:text-2xl font-light transform transition-all duration-[2000ms] ease-in-out ${
            fourthSectionInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } max-w-prose text-center lg:text-left`}
        >
          <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-copperAccent mb-6">
            Movement
          </h2>
          <div className="text-base sm:text-lg lg:text-lg">
          Caliber: <span className="font-medium">Peseux 7001</span>
          <br />
          <br />
          Power Reserve: <span className="font-medium">~42-45 hrs</span>
          <br />
          <br />
          Vibrations: <span className="font-medium">21,600 bps</span>
          <br />
          <br />
          Jewels: <span className="font-medium">17</span>
        </div>
        </div>
      </div>

      {/* Vertical Spacer */}
      <div className="h-24 lg:h-24"></div>
    </div>
  );
};

export default PR02Page;
