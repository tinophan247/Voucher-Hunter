import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StopStatus } from "../../../redux/ChineseDiceSlice";
import { StopResultKBB } from "../../../redux/KBBSlice";
import { StopResultBauCua } from "../../../redux/BauCua";

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


const ModalGame = ({ showModal, voucher, userId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(showModal);
  const handleClose = () => {
    setOpen(false);
    dispatch(StopStatus());
    dispatch(StopResultKBB());
    dispatch(StopResultBauCua());
  }
  return (
    <Modal
      open={open}
      onClose={() => handleClose() }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Chúc mừng bạn đã chiến thắng
        </Typography>
        {!userId ? (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bạn chưa đăng nhập, hãy đăng nhập để nhận voucher
          </Typography>
        ) : (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Mã voucher của bạn là :
            <span className="font-bold text-red-500">{voucher}</span>
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ModalGame;
