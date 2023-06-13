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
import { defaultUser } from "../../../constant";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { authActions, getAllCustomer } from "../../../redux/authSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../../components/Loader";
import moment from "moment";
import EditUser from "./EditUser";
import Notification from "../../../components/Notification";
import dayjs from "dayjs";
import ConfirmModalUser from "../../../components/Modal/ConfirmModalUser";

const UserManagement = () => {
  const dispatch = useDispatch();
  const { userList, isLoading, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(defaultUser);
  const [showModal, setShowModal] = useState(false);

  const handleDestroyErr = () => {
    dispatch(authActions.destroyerror());
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setUser(defaultUser);
  };

  const handleEdit = (item) => {
    setUser({
      id: item.id,
      fullname: item.fullname,
      email: item.email,
      phone: item.phone,
      province: item.province,
      district: item.district,
      ward: item.ward,
      address: item.address,
      birthday: dayjs(item.birthday) ,
      password: item.password,
      role: item.role
    });
    setIsEdit(true);
  };

  const handleDelete = (item) => {
    setUser({
      id: item.id,
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);

  return (
    <AdminSiteLayout>
      <div>
        <p className="text-base uppercase font-medium mb-10">
          Quản trị Khách Hàng
        </p>
        <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ textTransform: "uppercase" }}>
                  ID
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "128px" }}
                  align="center"
                >
                  Họ và tên
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "128px" }}
                  align="center"
                >
                  Email
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Số Điện thoại
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "128px" }}
                  align="center"
                >
                  Địa chỉ
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Mã Phường/Xã
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Mã Quận/Huyện
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Mã Tỉnh/Thành phố
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Sinh nhật
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "128px" }}
                  align="center"
                >
                  Danh sách Voucher
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Phân Quyền
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
              {!isLoading && userList.length > 0 &&
              userList.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell title={item.fullname} align="center">
                    <div className=" truncate w-32">{item.fullname}</div>
                  </StyledTableCell>
                  <StyledTableCell title={item.email} align="center">
                    <div className=" truncate w-32">{item.email}</div>
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.phone}</StyledTableCell>
                  <StyledTableCell title={item.address} align="center">
                    <div className=" truncate w-32">{item.address}</div>
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.ward}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.district}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.province}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  {moment(item.birthday).format("DD/MM/YYYY")}
                  </StyledTableCell>
                  <StyledTableCell title='' align="center">
                    <div className=" truncate w-32">{item.voucher.code}</div>
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.role}</StyledTableCell>
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
          {!isLoading && userList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không có dữ liệu.
            </div>
          )}
        </TableContainer>
        <EditUser
          isShow={isEdit}
          handleCloseModal={handleCloseModal}
          data={user}
        />
        {showModal && (
          <ConfirmModalUser
            showModal={showModal}
            data={user}
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

export default UserManagement;
