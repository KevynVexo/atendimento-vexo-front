import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  outline: "none", // Evita que a borda preta apareça ao redor do modal
};

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, title, message }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      disableAutoFocus
      disableEnforceFocus
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {message}
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose} sx={{ mt: 2 }}>
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};

export default BasicModal;
