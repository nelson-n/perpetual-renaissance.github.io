
import React from "react";
import { useInView } from "react-intersection-observer";

const StoryPage = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-white min-h-screen py-24 flex flex-col justify-center items-center lg:space-y-8">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16">
        {/* Image Section */}
        <img
          ref={imageRef}
          src={`${process.env.PUBLIC_URL}/assets/FounderPhoto.png`}
          alt="Founder"
          className={`w-2/3 lg:w-2/3 max-w-lg transform transition-all duration-[2000ms] ease-in-out ${
            imageInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />

        <div className="flex flex-col items-center lg:items-start">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black transform transition-all duration-[2000ms] ease-in-out ${
              headerInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } mb-2 text-center lg:text-left`}
          >
            Story
          </div>

          {/* Text Section */}
          <p
            ref={textRef}
            className={`mt-2 lg:mt-0 text-center lg:text-left text-lg sm:text-xl lg:text-2xl font-light text-black transition-all duration-[2000ms] ease-in-out ${
              textInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } max-w-lg`}
          >
            Perpetual Renaissance was born out of a love for timeless design and
            precision craftsmanship. Our journey began with a single goal: to
            create watches that not only tell time but also tell a story. Each
            timepiece reflects the spirit of innovation, elegance, and enduring
            style. Join us as we redefine the art of watchmaking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
