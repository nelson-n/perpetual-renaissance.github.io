
import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import useImagePreloader from "../hooks/useImagePreloader";
import ImagePreloader from "../components/ImagePreloader";

const WatchesPage = () => {
  // Image URLs to preload
  const imageUrls = [
    `${process.env.PUBLIC_URL}/assets/PR02_COE_SIDE1.jpg`
  ];

  // Use image preloader hook
  const { imagesLoaded, loadingProgress } = useImagePreloader(imageUrls);

  // Section Load Triggers
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Show loading spinner until all images are loaded
  if (!imagesLoaded) {
    return <ImagePreloader loadingProgress={loadingProgress} />;
  }

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">

      {/* PR02 Image */}
      <Link to="/PR02" ref={imageRef} className="flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/PR02_COE_SIDE1.jpg`}
          alt="Perpetual Renaissance"
          className={`w-5/6 lg:w-1/2 max-w-none transform transition-all duration-[2000ms] ease-in-out hover:shadow-2xl cursor-pointer ${
            imageInView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        />
      </Link>

      {/* PR02 Text Overlay */}
      <div
        ref={textRef}
        className={`text-white font-bold text-8xl sm:text-8xl md:text-8xl lg:text-9xl transition-all duration-[2000ms] ease-in-out mt-8 ${
          textInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Link
          to="/PR02"
          className="hover:text-copperAccent transition-all duration-300"
        >
          PR 02
        </Link>
      </div>
    </div>
  );
};

export default WatchesPage;
