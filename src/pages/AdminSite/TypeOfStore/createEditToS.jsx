import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { createtoS, updateToS } from "../../../redux/typeOfStoreSlice";
import TextFields from "../../../components/TextField";
import { defaultTypeOfStore } from "../../../constant";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateEditToS({ isShow, handleCloseModal, data }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(defaultTypeOfStore);

  const handleSubmitForm = (e) => {
    try {
      e.preventDefault();
      const newData = {
        id : formState.id || undefined,
        description: formState.description,
      };

      formState.id === 0 ? dispatch(createtoS(newData)) : dispatch(updateToS(newData))

      setTimeout(() => {
        window.location.reload(true);
      },1000)
    } catch (error) {
        console.log(error);
    }    
  };

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

  return (
    <div>
      <Modal open={isShow}>
        <Box sx={style}>
          <form onSubmit={handleSubmitForm}>
            <div className="flex justify-between">
              <div />
              <div className="text-xl font-bold text-center">
                Tạo mới Loại Cửa hàng
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCloseModal()}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <TextFields
                label="Mô tả"
                width="500px"
                value={formState.description}
                onChange={(event) => {
                  setFormState({...formState,description : event.target.value});
                }}
              />
            </div>
            <div className="flex justify-end mt-10 gap-5">
              <button
                type="submit"
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
          </form>
        </Box>
      </Modal>
    </div>
  );
}
