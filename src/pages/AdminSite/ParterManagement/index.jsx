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
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../../components/Loader";
import { defaultPartner } from "../../../constant";
import { PartnerActions, getListPartner } from "../../../redux/partnerSlice";
import Notification from "../../../components/Notification";
import CreateEditPartner from "./createEditPartner";
import ConfirmModalPartner from "../../../components/Modal/ConfirmModalPartner";

const PartnerManagement = () => {
  const { partnerList, isLoading, isSuccess, message } = useSelector(
    (state) => state.partner
  );
  console.log(partnerList)
  const dispatch = useDispatch();
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [partner, setPartner] = useState(defaultPartner);
  const [showModal, setShowModal] = useState(false);

  const handleDestroyErr = () => {
    dispatch(PartnerActions.destroyerror());
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsCreate(false);
    setIsEdit(false);
    setPartner(defaultPartner);
  };

  const handleCreate = () => {
    setIsCreate(true);
  };

  const handleEdit = (item) => {
    setPartner({
      id: item.id,
      partnerName: item.partnerName,
      description: item.description,
      taxCode: item.taxCode,
      top: item.setPartner,
    });
    setIsEdit(true);
  };

  const handleDelete = (item) => {
    setPartner({
      id: item.id
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getListPartner());
  }, []);

  return (
    <AdminSiteLayout>
      <div>
        <div className="flex justify-between pr-5">
          <p className="text-base uppercase font-medium mb-10">
            Quản trị Đối tác
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
                  Mô Tả
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Mã số thuế
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Loại đối tác
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
              {!isLoading &&
                partnerList.length > 0 &&
                partnerList.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.partnerName}
                    </StyledTableCell>
                    <StyledTableCell title={item.description} align="center">
                      <div className=" truncate w-40">{item.description}</div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.taxCode}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.top}
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
          {!isLoading && partnerList.length === 0 && (
            <div className="w-full h-14 flex justify-center items-center">
              Không có dữ liệu.
            </div>
          )}
        </TableContainer>
        <CreateEditPartner
          isShow={isCreate || isEdit}
          handleCloseModal={handleCloseModal}
          data={partner}
          isCreate={isCreate}
        />
        {showModal && (
          <ConfirmModalPartner
            showModal={showModal}
            data={partner}
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

export default PartnerManagement;
