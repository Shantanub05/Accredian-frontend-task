// src/components/ReferralForm.js

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    refereeName: "",
    email: "",
    course: "",
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
      <TextField
        label="Course"
        name="course"
        value={formData.course}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ReferralForm;
