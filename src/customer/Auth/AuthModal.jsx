import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLocation, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "12px",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/register" ? <RegisterForm /> : <LoginForm />}

          {/* <RegisterForm /> */}
          {/* <LoginForm /> */}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
