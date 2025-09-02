import React from 'react';

const ImagePreloader = ({ loadingProgress }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="text-center">
        {/* Logo or Brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black">
            <span className="font-semibold">Perpetual</span>{' '}
            <span className="font-normal">Renaissance</span>
          </h1>
        </div>
        
        {/* Custom Perpetual Renaissance Buffering Symbol */}
        <div className="loading-content mb-6">
          {/* PR Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/LoadingLogo.png`}
            alt="Loading Logo"
            className="loading-logo"
            style={{ width: '60px', height: '60px' }} 
          />

          {/* Loading Animation - Balance Wheel */}
          <div className="balance-wheel">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="balance-wheel-svg"
            >
              {/* Inner Oscillating Circle */}
              <circle
                cx="100"
                cy="100"
                r="45"
                stroke="black"
                strokeWidth="1"
                fill="none"
                className="oscillating-circle"
              />

              {/* Outer Quarter Circles */}
              <path
                d="M100 10 A90 90 0 0 1 190 100"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="quarter-circle oscillate"
              />
              <path
                d="M100 190 A90 90 0 0 1 10 100"
                stroke="black"
                strokeWidth="2"
                fill="none"
                className="quarter-circle-reverse oscillate"
              />
            </svg>
          </div>
        </div>
        
        {/* Progress Text */}
        <div className="text-lg text-gray-600 mb-4">
          Loading images... {Math.round(loadingProgress)}%
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
          <div 
            className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreloader;
