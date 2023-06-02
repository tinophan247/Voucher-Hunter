import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  getListToS,
} from "../../../redux/typeOfStoreSlice";
import TextFields from "../../../components/TextField";
import SingleSelect from "../../../components/SingleSelect";
import DatePickers from "../../../components/DatePicker";
import { createVoucher, updateVoucher } from "../../../redux/voucherSlice";
import { defaultVoucher } from "../../../constant";

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

export default function CreateEditVoucher({ isShow, handleCloseModal, data }) {
  const { ToSList } = useSelector((state) => state.typeOfStore);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(defaultVoucher);

  const convertDataToS = (array) => {
    const DataList = array.map((item) => ({
      value: item.description,
      label: item.description,
    }));
    return DataList;
  };

  const handleSubmitForm = (e) => {
    try {
      e.preventDefault();
      const newData = {
        id: formState.id || undefined,
        name: formState.name,
        description: formState.description,
        discount: formState.discount,
        img: formState.img,
        code: formState.code,
        condition1: formState.condition1,
        condition2: formState.condition2,
        tos: formState.tos,
        startDate: formState.startDate,
        endDate: formState.endDate,
      };

      formState.id === 0
        ? dispatch(createVoucher(newData))
        : dispatch(updateVoucher(newData));

      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

  useEffect(() => {
    dispatch(getListToS());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Modal open={isShow}>
        <Box sx={style}>
          <form onSubmit={handleSubmitForm}>
            <div className="flex justify-between">
              <div />
              <div className="text-xl font-bold text-center">
                Tạo mới Voucher
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
                  label="Tên voucher"
                  width="500px"
                  value={formState.name}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      name: event.target.value,
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
                  label="Giảm giá"
                  width="500px"
                  value={formState.discount}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      discount: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="URL ảnh"
                  width="500px"
                  value={formState.img}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      img: event.target.value,
                    });
                  }}
                />
                  <TextFields
                  label="Mã code"
                  width="500px"
                  value={formState.code}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      code: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="Điều kiện 1"
                  width="500px"
                  value={formState.condition1}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      condition1: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="Điều kiện 2"
                  width="500px"
                  value={formState.condition2}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      condition2: event.target.value,
                    });
                  }}
                />
                <SingleSelect
                  label="Loại cửa hàng"
                  width="500px"
                  options={convertDataToS(ToSList)}
                  value={formState.tos}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      tos: event.target.value,
                    });
                  }}
                />
                <div className="mt-3">
                  <DatePickers
                    width="500px"
                    label="Ngày bắt đầu"
                    value={formState.startDate}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        startDate: event,
                      });
                    }}
                  />
                </div>
                <div className="mt-3">
                  <DatePickers
                    width="500px"
                    label="Ngày hết hạn"
                    value={formState.endDate}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        endDate: event,
                      });
                    }}
                  />
                </div>
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
