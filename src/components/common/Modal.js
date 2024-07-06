import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal as MuiModal,
  MenuItem,
  CircularProgress,
} from "@mui/material";

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    refereeName: "",
    email: "",
    program: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.referrerName = formData.referrerName
      ? ""
      : "This field is required.";
    tempErrors.refereeName = formData.refereeName
      ? ""
      : "This field is required.";
    tempErrors.email = formData.email ? "" : "This field is required.";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    tempErrors.program = formData.program ? "" : "This field is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await onSubmit(formData);
      setIsSubmitting(false);
    }
  };

  return (
    <MuiModal open={true} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Referrer Name"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.referrerName}
            helperText={errors.referrerName}
          />
          <TextField
            label="Referee Name"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.refereeName}
            helperText={errors.refereeName}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            select
            label="Program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.program}
            helperText={errors.program}
          >
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
          </TextField>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              startIcon={isSubmitting && <CircularProgress size={20} />}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Box>
        </form>
      </Box>
    </MuiModal>
  );
};

export default Modal;