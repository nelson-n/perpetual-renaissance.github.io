import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Perpetual Renaissance
        </h2>
        <img
          src="./assets/Promo1.png" // Relative path from the deployed build root
          alt="Perpetual Renaissance Watch"
          className="max-w-md mx-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
