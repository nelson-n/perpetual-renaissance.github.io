
import React from "react";

const LoadingPage = ({ onComplete }) => {
  // Complete immediately - no fixed timing
  onComplete();
  
  // Return null since we're completing immediately
  return null;
};

export default LoadingPage;
