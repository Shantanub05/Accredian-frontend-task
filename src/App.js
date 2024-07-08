import React, { useState } from "react";
import TopNavigationBar from "./components/common/TopNavigationBar";
import MainNavigationTabs from "./components/common/MainNavigationTabs";
import NavigationBar from "./components/common/NavigationBar";
import HeroSection from "./components/sections/HeroSection";
import HowToRefer from "./components/sections/HowToRefer";
import Modal from "./components/common/Modal";
import ReferralBenefits from "./components/sections/ReferralBenefits";
import FAQ from "./components/sections/FAQ"; // Import the FAQ component
import CTABanner from "./components/sections/CTABanner"; // Import the CTABanner component
import Footer from "./components/common/Footer"; // Import the Footer component
import { Snackbar, Alert, Box, CircularProgress } from "@mui/material";
import { sendReferral } from "./api/apiService"; // Correct import path
import "./index.css"; // Ensure global styles are applied

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false); // State for spinner

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true); // Show spinner

    // Simulate 2-second delay
    setTimeout(async () => {
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
      } finally {
        setIsSubmitting(false); // Hide spinner
      }
    }, 2000);
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
        {/* Increased space between ReferralBenefits and FAQ */}
        <FAQ /> {/* Add the FAQ component here */}
      </Box>
      <Box mt={8}>
        {/* Add some space between FAQ and CTABanner */}
        <CTABanner /> {/* Add the CTABanner component here */}
      </Box>
      <Box mt={8}>
        {/* Add some space between CTABanner and Footer */}
        <Footer /> {/* Add the Footer component here */}
      </Box>
      {isModalOpen && (
        <Modal onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      )}
      {isSubmitting && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
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