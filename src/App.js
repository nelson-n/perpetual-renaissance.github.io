
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage"; 
import LandingPage from "./pages/LandingPage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";
import WatchesPage from "./pages/WatchesPage";
import PR02Page from "./pages/PR02Page";

import './App.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to track loading status

  const handleLoadingComplete = () => {
    setIsLoaded(true); // Mark the app as loaded
  };

  return (
    <>
      {!isLoaded && <LoadingPage onComplete={handleLoadingComplete} />} {/* Show Loading Page */}
      {isLoaded && (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/watches" element={<WatchesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/PR02" element={<PR02Page />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
