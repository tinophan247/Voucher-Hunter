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
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { VoucherActions, getListVoucher } from "../../../redux/voucherSlice";
import moment from "moment";
import Loader from "../../../components/Loader";
import CreateEditVoucher from "./createEditVoucher";
import Notification from "../../../components/Notification";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import ConfirmModalVoucher from "../../../components/Modal/ConfirmModalVoucher";
import { defaultVoucher } from "../../../constant";

const VoucherManagement = () => {
  const { VoucherList, isLoading, isSuccess, message } = useSelector(
    (state) => state.voucher
  );
  const dispatch = useDispatch();
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [voucher, setVoucher] = useState(defaultVoucher);
  const [showModal, setShowModal] = useState(false);

  const handleDestroyErr = () => {
    dispatch(VoucherActions.destroyerror());
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsCreate(false);
    setIsEdit(false);
    setVoucher(defaultVoucher);
  };

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleEdit = (item) => {
    setVoucher({
      id: item.id,
      name: item.name,
      description: item.description,
      discount: item.discount,
      img: item.img,
      code: item.code,
      condition1: item.condition1,
      condition2: item.condition2,
      tos: item.tos,
      startDate: dayjs(item.startDate),
      endDate: dayjs(item.endDate),
    });
    setIsEdit(true);
  };

  const handleDelete = (item) => {
    setVoucher({
      id: item.id,
      name: item.name,
      description: item.description,
      discount: item.discount,
      img: item.img,
      code: item.code,
      condition1: item.condition1,
      condition2: item.condition2,
      tos: item.tos,
      startDate: dayjs(item.startDate),
      endDate: dayjs(item.endDate),
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getListVoucher());
  }, []);

  return (
    <AdminSiteLayout>
      <div>
        <div className="flex justify-between pr-5">
          <p className="text-base uppercase font-medium mb-10">
            Quản trị Voucher
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
                  Code
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Tên Voucher
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
                  Giảm giá
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "160px" }}
                  align="center"
                >
                  Điều kiện 1
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "160px" }}
                  align="center"
                >
                  Điều kiện 2
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
                {!isLoading && VoucherList.length > 0 &&
                  VoucherList.map((item, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {item.id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.code}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell title={item.description} align="center">
                        <div className=" truncate w-40">{item.description}</div>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.discount}
                      </StyledTableCell>
                      <StyledTableCell title={item.description} align="center">
                        <div className=" truncate w-40">{item.condition1}</div>
                      </StyledTableCell>
                      <StyledTableCell title={item.description} align="center">
                        <div className=" truncate w-40">{item.condition2}</div>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.tos}
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
          {!isLoading && VoucherList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không có dữ liệu.
            </div>
          )}
        </TableContainer>
        <CreateEditVoucher
          isShow={isCreate || isEdit}
          handleCloseModal={handleCloseModal}
          data={voucher}
          isCreate={isCreate}
        />
        {showModal && (
          <ConfirmModalVoucher
            showModal={showModal}
            data={voucher}
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

export default VoucherManagement;
