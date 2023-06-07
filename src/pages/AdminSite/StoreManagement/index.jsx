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
import Loader from "../../../components/Loader";
import Notification from "../../../components/Notification";
import DeleteIcon from "@mui/icons-material/Delete";
import { defaultStore } from "../../../constant";
import { StoreActions, getListStore } from "../../../redux/storeSlice";
import CreateEditStore from "./createEditStore";
import ConfirmModalStore from "../../../components/Modal/ConfirmModalStore";

const StoreManagement = () => {
  const { StoreList, isLoading, isSuccess, message } = useSelector(
    (state) => state.store
  );
  const dispatch = useDispatch(); //gọi action tới reducer
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [store, setStore] = useState(defaultStore);
  const [showModal, setShowModal] = useState(false);

  const handleDestroyErr = () => {
    dispatch(StoreActions.destroyerror());
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsCreate(false);
    setIsEdit(false);
    setStore(defaultStore);
  };

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleEdit = (item) => {
    setStore({
      id: item.id,
      partnerName: item.partnerName,
      storeName: item.storeName,
      address: item.address,
      ward: item.ward,
      district: item.district,
      province: item.province,
      tos: item.tos,
    });
    setIsEdit(true);
  };

  const handleDelete = (item) => {
    setStore({
      id: item.id,
      partnerName: item.partnerName,
      storeName: item.storeName,
      address: item.address,
      ward: item.ward,
      district: item.district,
      province: item.province,
      tos: item.tos,
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getListStore());
  }, []);

  return (
    <AdminSiteLayout>
      <div>
        <div className="flex justify-between pr-5">
          <p className="text-base uppercase font-medium mb-10">
            Quản trị Cửa hàng
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
                  Tên Đối Tác
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "160px" }}
                  align="center"
                >
                  Tên Thương Mại
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase", width: "160px" }}
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
                  align="center"
                  style={{ textTransform: "uppercase", width: "160px" }}
                >
                  Mã Quận/Huyện
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ textTransform: "uppercase", width: "160px" }}
                >
                  Mã Thành Phố/Tỉnh
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Loại cửa hàng
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="right"
                >
                  Chỉnh sửa
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && StoreList.length > 0 &&
                StoreList.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.partnerName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.storeName}
                    </StyledTableCell>
                    <StyledTableCell title={item.address} align="center">
                      <div className=" truncate w-40">{item.address}</div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.ward}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.district}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.province}
                    </StyledTableCell>{" "}
                    <StyledTableCell align="center">{item.tos}</StyledTableCell>
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
          {!isLoading && StoreList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không có dữ liệu.
            </div>
          )}
        </TableContainer>
        <CreateEditStore
          isShow={isCreate || isEdit}
          handleCloseModal={handleCloseModal}
          data={store}
          isCreate={isCreate}
        />
        {showModal && (
          <ConfirmModalStore
            showModal={showModal}
            data={store}
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

export default StoreManagement;
