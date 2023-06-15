/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getListToS } from "../../../redux/typeOfStoreSlice";
import TextFields from "../../../components/TextField";
import SingleSelect from "../../../components/SingleSelect";
import DatePickers from "../../../components/DatePicker";
import { defaultEvent } from "../../../constant";
import { createEvent, updateEvent } from "../../../redux/eventSlice";
import { getListPartner } from "../../../redux/partnerSlice";
import { getListVoucher } from "../../../redux/voucherSlice";
import { getGameList } from "../../../redux/gameSlice";
import MultipleSelect from "../../../components/MultipleSelect";

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

export default function CreateEditEvent({
  isShow,
  handleCloseModal,
  data,
  isEdit,
}) {
  const { ToSList } = useSelector((state) => state.typeOfStore);
  const { partnerList } = useSelector((state) => state.partner);
  const { VoucherList } = useSelector((state) => state.voucher);
  const { gameListData } = useSelector((state) => state.game);
  const [formState, setFormState] = useState(defaultEvent);
  const [validForm, setValidForm] = useState({
    eventName: true,
    partnerName: true,
    tos: true,
    gameList: true,
    selectedVoucher: true,
    startDate: true,
    endDate: true,
  });

  const dispatch = useDispatch();

  const validateForm = () => {
    let isValid = true;

    if (formState.eventName?.trim() === "") {
      isValid = false;
    }

    Object.keys(validForm).forEach((x) => {
      if (!formState[x] || formState[x].value <= 0) {
        isValid = false;
        validForm[x] = false;
      }
    });

    if (!isValid) {
      setValidForm({ ...validForm });
      return false;
    }

    return true;
  };

  const convertDataToS = (array) => {
    const DataList = array.map((item) => ({
      value: item.description,
      label: item.description,
    }));
    return DataList;
  };

  const convertDataPartner = (array) => {
    const DataList = array.map((item) => ({
      value: item.partnerName,
      label: item.partnerName,
    }));
    return DataList;
  };

  const convertDataVoucher = (array) => {
    const DataList = array.map((item) => ({
      value: item.code,
      label: item.code,
    }));
    return DataList;
  };

  const convertDateGames = (array) => {
    const DataList = array.map((item) => ({
      value: item.gameName,
      label: item.gameName,
    }));
    return DataList;
  };

  const handleSubmitForm = (e) => {
    try {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }
      const newData = {
        id: formState.id || undefined,
        eventName: formState.eventName,
        description: formState.description,
        partnerName: formState.partnerName,
        tos: formState.tos,
        gameList: formState.gameList,
        selectedVoucher: formState.selectedVoucher,
        startDate: formState.startDate,
        endDate: formState.endDate,
      };

      formState.id === 0
        ? dispatch(createEvent(newData))
        : dispatch(updateEvent(newData));

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
  }, []);

  useEffect(() => {
    dispatch(getListPartner());
  }, []);

  useEffect(() => {
    dispatch(getListVoucher());
  }, []);

  useEffect(() => {
    dispatch(getGameList());
  }, []);

  return (
    <div>
      <Modal open={isShow}>
        <Box sx={style}>
          <form onSubmit={handleSubmitForm}>
            <div className="flex justify-between">
              <div />
              <div className="text-xl font-bold text-center">
                {isEdit ? "Chỉnh sửa Chiến dịch" : "Tạo mới Chiến dịch"}
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
                  label="Tên chiến dịch"
                  width="500px"
                  value={formState.eventName}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      eventName: event.target.value,
                    });
                    setValidForm({
                      ...validForm,
                      eventName: !!event.target.value.trim(),
                    });
                  }}
                  required={true}
                  valid={validForm.eventName}
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
                <SingleSelect
                  label="Loại đối tác"
                  width="500px"
                  options={convertDataPartner(partnerList)}
                  value={formState.partnerName}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      partnerName: event.target.value,
                    });
                    setValidForm({
                      ...validForm,
                      partnerName: true,
                    });
                  }}
                  required={true}
                  valid={validForm.partnerName}
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
                    setValidForm({
                      ...validForm,
                      tos: true,
                    });
                  }}
                  required={true}
                  valid={validForm.tos}
                />
                <MultipleSelect
                  label="Game"
                  width="500px"
                  options={convertDateGames(gameListData)}
                  value={formState.gameList}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      gameList: event.target.value,
                    });
                    setValidForm({
                      ...validForm,
                      gameList: true,
                    });
                  }}
                  required={true}
                  valid={validForm.gameList}
                />
                <SingleSelect
                  label="Voucher được chọn"
                  width="500px"
                  options={convertDataVoucher(VoucherList)}
                  value={formState.selectedVoucher}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      selectedVoucher: event.target.value,
                    });
                    setValidForm({
                      ...validForm,
                      selectedVoucher: true,
                    });
                  }}
                  required={true}
                  valid={validForm.selectedVoucher}
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
                    label="Ngày kết thúc"
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
