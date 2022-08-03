import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.css";
import { FaBorderNone } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  height: 300,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const CareerModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const Interval = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => clearTimeout(Interval);
  }, [1]);

  return (
    <div className="modal_div">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img
              src="/images/rectangle.png"
              style={{ width: "200px", height: "150px" }}
            />
            <div className="swipe_text">
              Swipe down to see next post Swipe right to like post Swipe left to
              dislike post
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default CareerModal;
