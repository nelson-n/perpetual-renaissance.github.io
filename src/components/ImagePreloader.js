import React from 'react';

const ImagePreloader = ({ loadingProgress }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Custom Perpetual Renaissance Buffering Symbol */}
      <div className="loading-content">
        {/* PR Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/OLD/LoadingLogo.png`}
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
    </div>
  );
};

export default ImagePreloader;
