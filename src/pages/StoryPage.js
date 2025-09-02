
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import useImagePreloader from "../hooks/useImagePreloader";
import ImagePreloader from "../components/ImagePreloader";

const StoryPage = () => {
  // Image URLs to preload
  const imageUrls = [
    `${process.env.PUBLIC_URL}/assets/COE_FOUNDER_PHOTO.jpg`
  ];

  // Use image preloader hook
  const { imagesLoaded, loadingProgress } = useImagePreloader(imageUrls);

  {/* Section Load Triggers */}
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  // Show loading spinner until all images are loaded
  if (!imagesLoaded) {
    return <ImagePreloader loadingProgress={loadingProgress} />;
  }

  return (
    <div className="bg-white min-h-screen py-16 px-4 lg:px-24 flex flex-col justify-center items-center overflow-visible">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16">

        {/* Image Section */}
        <img
          ref={imageRef}
          src={`${process.env.PUBLIC_URL}/assets/COE_FOUNDER_PHOTO.jpg`}
          alt="Perpetual Renaissance"
          className={`w-full sm:w-3/4 lg:w-2/3 max-w-lg transform transition-all duration-[2000ms] ease-in-out ${
            imageInView
              ? "translate-x-0 opacity-100"
              : "translate-x-[50vw] sm:translate-x-full opacity-0"
          } mb-8 lg:mb-0`}
        />

        <div className="flex flex-col items-center lg:items-start">

          {/* Story Header */}
          <div
            ref={headerRef}
            className={`text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black transform transition-all duration-[2000ms] ease-in-out ${
              headerInView
                ? "translate-x-0 opacity-100"
                : "translate-x-[50vw] sm:translate-x-full opacity-0"
            } mb-4 text-center lg:text-left`}
          >
            Story
          </div>

          {/* Text Section */}
          <p
            ref={textRef}
            className={`text-base sm:text-lg lg:text-xl font-light text-black transform transition-all duration-[2000ms] ease-in-out ${
              textInView
                ? "translate-x-0 opacity-100"
                : "translate-x-[50vw] sm:translate-x-full opacity-0"
            } text-center lg:text-left max-w-[90%] sm:max-w-full lg:max-w-lg`}
          >
            Nelson Rayl founded Perpetual Renaissance in 2020 with the goal of combining modern materials
            with classic watch calibers. Born out of this vision for modern watchmaking, the brand creates
            horological art that blends the beauty and performance of modern materials science with the timeless
            elegance of historic watch calibers. At the heart of Perpetual Renaissance is its signature cerulean case,
            produced on an additive manufacturing machine designed and custom built by Nelson for this exact application. 
            This unique creation exemplifies the brand’s ethos of discovery and reinvention, inspiring constant evolution 
            and pushing the boundaries of watchmaking.
          </p>

          {/* Contact Link */}
          <Link
            className={`mt-4 text-black text-lg sm:text-xl lg:text-xl font-bold hover:text-burgundy transition-all duration-100 transform transition-all duration-[2000ms] ease-in-out ${
              textInView
                ? "translate-x-0 opacity-100"
                : "translate-x-[50vw] sm:translate-x-full opacity-0"
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
