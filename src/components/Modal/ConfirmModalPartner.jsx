import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { defaultStore } from "../../constant";
import { deleteStore } from "../../redux/storeSlice";
import { deletePartner } from "../../redux/partnerSlice";

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

const ConfirmModalPartner = ({ showModal, data, handleCloseModal }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(defaultStore);

  const handleDelete = () => {
    const newData = {
        id: formState.id,
      };
    dispatch(deletePartner(newData));

    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

  return (
    <Modal
      open={showModal}
      onClose={() => handleCloseModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          Bạn có chắc là xóa chứ?
        </Typography>
        <div className="flex justify-center mt-10 gap-5">
          <button
            onClick={() => handleDelete()}
            className=" text-base font-bold bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg  "
          >
            Lưu
          </button>
          <button
            onClick={() => handleCloseModal()}
            className=" text-base font-bold hover:bg-gray-200 w-32 h-10 rounded-lg border "
          >
            Hủy bỏ
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmModalPartner;
