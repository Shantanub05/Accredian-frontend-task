// src/components/HeroSection.js

import React from "react";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import heroImage from "../../assets/hero-image.png"; 

const HeroSection = ({ onReferNowClick }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e9f3ff", 
          borderRadius: "15px",
          padding: "40px",
          textAlign: "center",
          mt: { xs: 2, md: 4 },
          position: "relative",
          overflow: "hidden",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", 
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "3rem" }, 
                }}
              >
                Let’s Learn & Earn
              </Typography>
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" }, 
                  mt: 2,
                }}
              >
                Get a chance to win up-to{" "}
                <Typography
                  component="span"
                  variant="h5"
                  color="primary"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.2rem", md: "1.5rem" }, 
                  }}
                >
                  Rs. 15,000
                </Typography>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={onReferNowClick}
                sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1rem" }} 
              >
                Refer Now
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src={heroImage}
              alt="Hero"
              style={{
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                bottom: "-60px", 
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
