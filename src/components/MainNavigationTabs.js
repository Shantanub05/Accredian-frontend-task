// src/components/MainNavigationTabs.js

import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const MainNavigationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 2, px: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        sx={{
          maxWidth: "600px", // Further reduce the max width
          margin: "0 auto", // Center the tabs
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "30px",
            py: 1,
            px: 2,
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "25px",
            mx: 1,
            minHeight: "36px", // Adjust height to match the design
            py: 1,
            px: 2,
          },
          "& .Mui-selected": {
            color: "#007bff",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Tab label="Refer" />
        <Tab label="Benefits" />
        <Tab label="FAQs" />
        <Tab label="Support" />
      </Tabs>
    </Box>
  );
};

export default MainNavigationTabs;
