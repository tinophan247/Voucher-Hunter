/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AdminSiteLayout from "../AdminSiteLayout";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../MyVoucher/styledTable";
import { defaultEvent } from "../../../constant";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { EventActions, getListEvent } from "../../../redux/eventSlice";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../../components/Loader";
import Notification from "../../../components/Notification";
import moment from "moment";
import CreateEditEvent from "./createEditEvent";
import ConfirmModalEvent from "../../../components/Modal/ConfirmModalEvent";

const EventManagement = () => {
  const { eventList, isLoading, isSuccess, message } = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [event, setEvent] = useState(defaultEvent);
  const [showModal, setShowModal] = useState(false);

  const handleDestroyErr = () => {
    dispatch(EventActions.destroyerror());
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsCreate(false);
    setIsEdit(false);
    setEvent(defaultEvent);
  };

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleEdit = (item) => {
    setEvent({
      id: item.id,
      eventName: item.eventName,
      description: item.description,
      partnerName: item.partnerName,
      tos: item.tos,
      gameList: item.gameList,
      selectedVoucher: item.selectedVoucher,
      startDate: dayjs(item.startDate),
      endDate: dayjs(item.endDate),
    });
    setIsEdit(true);
  };

  const handleDelete = (item) => {
    setEvent({
      ...event,
      id: item.id,
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getListEvent());
  }, []);

  return (
    <AdminSiteLayout>
      <div>
        <div className="flex justify-between pr-5">
          <p className="text-base uppercase font-medium mb-10">
            Quản trị Chiến dịch
          </p>
          <button
            onClick={() => handleCreate()}
            className=" text-xl font-bold bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg  "
          >
            Tạo mới
          </button>
        </div>
        <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ textTransform: "uppercase" }}>
                  ID
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Tên Chiến Dịch
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "160px" }}
                  align="center"
                >
                  Mô Tả
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Đối Tác
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Loại cửa hàng
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Game
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "160px" }}
                  align="center"
                >
                  Voucher được chọn
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Ngày bắt đầu
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Ngày hết hạn
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Chỉnh sửa
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading &&
                eventList.length > 0 &&
                eventList.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.eventName}
                    </StyledTableCell>
                    <StyledTableCell title={item.description} align="center">
                      <div className=" truncate w-40">{item.description}</div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.partnerName}
                    </StyledTableCell>
                    <StyledTableCell align="center">{item.tos}</StyledTableCell>
                    <StyledTableCell align="center">
                      {item.game.gameName}
                    </StyledTableCell>
                    <StyledTableCell
                      title={item.selectedVoucher}
                      align="center"
                    >
                      <div className=" truncate w-40">
                        {item.selectedVoucher}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {moment(item.startDate).format("DD/MM/YYYY")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {moment(item.endDate).format("DD/MM/YYYY")}
                    </StyledTableCell>
                    <StyledTableCell>
                      <div className="flex justify-end gap-2">
                        <div
                          onClick={() => handleEdit(item)}
                          className="bg-green-neon w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer"
                        >
                          <EditIcon />
                        </div>
                        <div
                          onClick={() => handleDelete(item)}
                          className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer"
                        >
                          <DeleteIcon />
                        </div>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          {isLoading && (
            <div className="w-full h-[640px] flex justify-center items-center">
              <Loader />
            </div>
          )}
          {!isLoading && eventList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không có dữ liệu.
            </div>
          )}
        </TableContainer>
        <CreateEditEvent
          isShow={isCreate || isEdit}
          handleCloseModal={handleCloseModal}
          data={event}
          isEdit={isEdit}
        />
        {showModal && (
          <ConfirmModalEvent
            showModal={showModal}
            data={event}
            handleCloseModal={handleCloseModal}
          />
        )}
        {isSuccess && (
          <Notification
            show={isSuccess}
            message={message}
            type={"success"}
            handleDestroyErr={handleDestroyErr}
          />
        )}
      </div>
    </AdminSiteLayout>
  );
};

export default EventManagement;
