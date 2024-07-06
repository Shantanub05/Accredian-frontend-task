import React, { useState } from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import MainNavigationTabs from "./components/MainNavigationTabs";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import HowToRefer from "./components/HowToRefer";
import Modal from "./components/Modal";
import { Snackbar, Alert } from "@mui/material";
import { sendReferral } from "./components/apiService"; // Import the function
import "./index.css"; // Ensure global styles are applied

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await sendReferral(formData);

      if (response && response.data) {
        setSnackbarMessage("Referral submitted successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setIsModalOpen(false); // Close the modal after successful submission
      } else {
        setSnackbarMessage("Error: Failed to submit referral");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage(`Error: ${error.message}`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="App">
      <TopNavigationBar />
      <NavigationBar />
      <MainNavigationTabs />
      <HeroSection onReferNowClick={handleReferNowClick} />
      <HowToRefer onReferNowClick={handleReferNowClick} />
      {isModalOpen && (
        <Modal onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
