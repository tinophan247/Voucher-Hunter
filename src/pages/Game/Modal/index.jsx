import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalGame = ({showModal}) => {

  return (
    <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Chúc mừng bạn đã chiến thắng
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Mã voucher của bạn là : XXXXXXXXXX
          </Typography>
        </Box>
      </Modal>
  )
}

export default ModalGame;