import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const styles = {
  banner: {
    backgroundColor: "#1A73E8",
    color: "#FFFFFF",
    padding: "24px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "24px",
  },
  bannerContent: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: "48px",
    marginRight: "16px",
  },
  button: {
    backgroundColor: "#FFFFFF",
    color: "#1A73E8",
    borderRadius: "24px",
    padding: "8px 24px",
    textTransform: "none",
    fontWeight: "bold",
  },
};

const CTABanner = () => {
  return (
    <Container maxWidth="lg">
      <Box style={styles.banner}>
        <Box style={styles.bannerContent}>
          <HeadsetMicIcon style={styles.icon} />
          <Box>
            <Typography variant="h6">
              Want to delve deeper into the program?
            </Typography>
            <Typography variant="body2">
              Share your details to receive expert insights from our program team!
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" style={styles.button}>
          Get in touch
        </Button>
      </Box>
    </Container>
  );
};

export default CTABanner;