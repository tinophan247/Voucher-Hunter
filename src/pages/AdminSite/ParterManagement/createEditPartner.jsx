/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import TextFields from "../../../components/TextField";
import SingleSelect from "../../../components/SingleSelect";
import { defaultPartner, typeOfPartner } from "../../../constant";
import { createPartner, updatePartner } from "../../../redux/partnerSlice";

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

export default function CreateEditPartner({ isShow, handleCloseModal, data }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(defaultPartner);

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

  const handleSubmitForm = (e) => {
    try {
      e.preventDefault();
      const newData = {
        id: formState.id || undefined,
        partnerName: formState.partnerName,
        description: formState.description,
        taxCode: formState.taxCode,
        top: formState.top,
      };

      formState.id === 0
        ? dispatch(createPartner(newData))
        : dispatch(updatePartner(newData));

      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal open={isShow}>
        <Box sx={style}>
          <form onSubmit={handleSubmitForm}>
            <div className="flex justify-between">
              <div />
              <div className="text-xl font-bold text-center">
                Tạo mới đối tác
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCloseModal()}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div>
                <TextFields
                  label="Tên đối tác"
                  width="500px"
                  value={formState.partnerName}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      partnerName: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="Mô tả"
                  width="500px"
                  value={formState.description}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      description: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="Mã số thuế"
                  width="500px"
                  value={formState.taxCode}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      taxCode: event.target.value,
                    });
                  }}
                />
                <SingleSelect
                  label="Loại đối tác"
                  width="500px"
                  options={typeOfPartner}
                  value={formState.top}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      top: event.target.value,
                    });
                  }}
                />
              </div>
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
