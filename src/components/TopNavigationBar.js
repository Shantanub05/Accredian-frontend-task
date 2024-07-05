// src/components/TopNavigationBar.js

import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";

const TopNavigationBar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#e9f3ff", margin: 0 }}
    >
      <Toolbar
        sx={{ justifyContent: "center", padding: "0", minHeight: "32px" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", color: "#212529" }} // Increase font size
          >
            Navigate your ideal career path with tailored expert advice
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#007bff", fontSize: "1rem", marginLeft: "8px" }} // Increase font size
          >
            Contact Expert
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigationBar;
