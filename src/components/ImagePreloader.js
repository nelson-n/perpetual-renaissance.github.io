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
        
        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto"></div>
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
