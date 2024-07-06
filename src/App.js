import React, { useState } from "react";
import TopNavigationBar from "./components/common/TopNavigationBar";
import MainNavigationTabs from "./components/common/MainNavigationTabs";
import NavigationBar from "./components/common/NavigationBar";
import HeroSection from "./components/sections/HeroSection";
import HowToRefer from "./components/sections/HowToRefer";
import Modal from "./components/common/Modal";
import ReferralBenefits from "./components/sections/ReferralBenefits";
import FAQ from "./components/sections/FAQ"; 
import CTABanner from "./components/sections/CTABanner"; 
import Footer from "./components/common/Footer"; 
import { Snackbar, Alert, Box, Typography } from "@mui/material";
import { sendReferral } from "./api/apiService";
import "./index.css"; 

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
        setIsModalOpen(false); 
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
      <Box mt={8}>
        <ReferralBenefits />
      </Box>
      <Box mt={12}>
        {" "}
        {}
        <FAQ /> {}
      </Box>
      <Box mt={8}>
        {" "}
        {}
        <CTABanner /> {}
      </Box>
      <Box mt={8}>
        {" "}
        {}
        <Footer /> {}
      </Box>
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
