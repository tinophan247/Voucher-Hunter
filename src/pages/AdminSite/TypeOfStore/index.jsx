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
import {
  getListToS,
  typeOfStoreActions,
} from "../../../redux/typeOfStoreSlice";
import Loader from "../../../components/Loader";
import Notification from "../../../components/Notification";
import CreateEditToS from "./createEditToS";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../../components/Modal/ConfirmModal";
import { defaultTypeOfStore } from "../../../constant";

const TypeOfStore = () => {
  const dispatch = useDispatch();
  const { ToSList, isLoading, message, isSuccess } = useSelector(
    (state) => state.typeOfStore
  );
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tos, setTos] = useState(defaultTypeOfStore);
  const [showModal, setShowModal] = useState(false);

  const handleDestroyErr = () => {
    dispatch(typeOfStoreActions.destroyerror());
  };

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsCreate(false);
    setIsEdit(false);
    setTos(defaultTypeOfStore);
  };

  const handleEdit = (item) => {
    setTos({
      id: item.id,
      description: item.description,
    });
    setIsEdit(true);
  };

  const handleDeleteToS = (item) => {
    setTos({
      id: item.id,
      description: item.description,
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getListToS());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminSiteLayout>
      <div>
        <div className="flex justify-between pr-5">
          <p className="text-base uppercase font-medium mb-10">
            Quản lý loại cửa hàng
          </p>
          <button
            onClick={() => handleCreate()}
            className=" text-xl font-bold bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg  "
          >
            Tạo mới
          </button>
        </div>
        <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ textTransform: "uppercase" }}>
                  ID
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Mô tả
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
              {!isLoading && ToSList.length > 0 &&
                ToSList.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.description}
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
                          onClick={() => handleDeleteToS(item)}
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
          {!isLoading && ToSList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không có dữ liệu.
            </div>
          )}
        </TableContainer>
        <CreateEditToS
          isShow={isCreate || isEdit}
          handleCloseModal={handleCloseModal}
          data={tos}
          isCreate={isCreate}
        />
        {showModal && (
          <ConfirmModal
            showModal={showModal}
            data={tos}
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

export default TypeOfStore;
