// src/components/Modal.js

import React from "react";
import { Modal as MuiModal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReferralForm from "./ReferralForm";

const Modal = ({ onClose }) => {
  return (
    <MuiModal open={true} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 400 },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <ReferralForm />
      </Box>
    </MuiModal>
  );
};

export default Modal;
