import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(showModal);

  return (
    <Modal
      open={open}
      onClose={() => 
        {setOpen(false);
          setTimeout(() => {
            window.location.reload(true);
          }, 1000);
        }}
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
