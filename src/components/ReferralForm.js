// src/components/ReferralForm.js

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    refereeName: "",
    email: "",
    program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" gutterBottom>
        Refer a Friend
      </Typography>
      <TextField
        label="Your Name"
        name="referrerName"
        value={formData.referrerName}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Friend's Name"
        name="refereeName"
        value={formData.refereeName}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Friend's Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="program-label">Select Program</InputLabel>
        <Select
          labelId="program-label"
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          label="Select Program"
          sx={{
            "& .MuiSelect-select": {
              paddingTop: "12px",
              paddingBottom: "12px",
            },
            "& .MuiInputLabel-root": {
              top: "-6px", // Adjust this value as needed
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Data Science">Data Science</MenuItem>
          <MenuItem value="Product Management">Product Management</MenuItem>
          <MenuItem value="General Management">General Management</MenuItem>
          <MenuItem value="HR Analytics">HR Analytics</MenuItem>
          <MenuItem value="Sales and Marketing">Sales and Marketing</MenuItem>
          <MenuItem value="Digital Transformation">
            Digital Transformation
          </MenuItem>
          <MenuItem value="Operations & Supply Chain Management">
            Operations & Supply Chain Management
          </MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ReferralForm;
