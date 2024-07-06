// src/components/HowToRefer.js

import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import howToReferImage from "../../assets/how-to-refer.png"; // Ensure the path is correct

const HowToRefer = ({ onReferNowClick }) => {
  return (
    <Box sx={{ backgroundColor: "#e9f3ff", width: "100%", py: 8, mt: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          How do I{" "}
          <Typography
            component="span"
            color="primary"
            sx={{ fontWeight: "bold", fontSize: "inherit" }}
          >
            Refer?
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            mb: 4,
          }}
        >
          <img
            src={howToReferImage}
            alt="How to Refer"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={onReferNowClick}
          sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1rem" }} // Adjust padding and font size for the button
        >
          Refer Now
        </Button>
      </Container>
    </Box>
  );
};

export default HowToRefer;
