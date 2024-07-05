// src/App.js

import React, { useState } from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import MainNavigationTabs from "./components/MainNavigationTabs";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import Modal from "./components/Modal";
import "./index.css"; // Ensure global styles are applied

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <TopNavigationBar />
      <NavigationBar />
      <MainNavigationTabs />
      <HeroSection onReferNowClick={handleReferNowClick} />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
