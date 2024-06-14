import React, { useState } from "react";
import Image from "./Image";
import ProfileImg from "../../assets/ProfileImg.png";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import Icon from "./Icon";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navber = () => {
  const auth = getAuth();
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="navbox">
      <Image className="profileImg" srcImg={ProfileImg} altText="ProfileImg" />
      <Icon className="pageIcon" iconname={<IoHomeOutline />} />
      <Icon className="pageIcon" iconname={<AiOutlineMessage />} />
      <Icon className="pageIcon" iconname={<IoMdNotificationsOutline />} />
      <Icon className="pageIcon" iconname={<IoSettingsOutline />} />
      <Icon onClick={handleOpen} className="pageIcon" iconname={<FiLogOut />} />

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Logout
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              If you want to log out then click on confirm button and if you
              don't want to log out means you don't want to stay on this page
              then click on cancel button
            </Typography>
            <Button sx={{ mr: 1 }} onClick={handleLogout} variant="contained">
              confirm
            </Button>
            <Button onClick={handleClose} variant="outlined">
              cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Navber;
