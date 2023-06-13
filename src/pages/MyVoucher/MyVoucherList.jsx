/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ExtraHeader from "../../components/ExtraHeader";
import VoucherModal from "../../components/Modal/VoucherModal";
import { useDispatch, useSelector } from "react-redux";
import { getListVoucher } from "../../redux/voucherSlice";
import { getAllCustomer } from "../../redux/authSlice";
import { defaultVoucher } from "../../constant";
import dayjs from "dayjs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./styledTable";
import MyVoucherTR from "./MyVoucherTR";

const MyVoucherList = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [voucher, setVoucher] = useState(defaultVoucher);

  const handleCloseModal = () => {
    setShowModal(false);
    setVoucher(defaultVoucher);
  };
  const userId = localStorage.getItem("id");

  // eslint-disable-next-line eqeqeq
  const filteruser = userList.filter(item => item.id == userId);


  const handleEdit = (item) => {
    setVoucher({
      id: item.voucher.id,
      name: item.voucher.name,
      description: item.voucher.description,
      discount: item.voucher.discount,
      img: item.voucher.img,
      code: item.voucher.code,
      condition1: item.voucher.condition1,
      condition2: item.voucher.condition2,
      tos: item.voucher.tos,
      startDate: dayjs(item.voucher.startDate),
      endDate: dayjs(item.voucher.endDate),
    });
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getListVoucher());
  }, []);

  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <ExtraHeader />
      <div className="flex justify-center">
        <div className="w-[70%]">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ textTransform: "uppercase" }}>
                    Danh Sách Voucher
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
                    Hạn sử dụng
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ textTransform: "uppercase" }}
                    align="center"
                  >
                    Chi tiết
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteruser.length > 0 &&
                  filteruser.map((item, index) => (
                    <MyVoucherTR
                      item={item}
                      key={index}
                      handleEdit={() => handleEdit(item)}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {showModal && (
        <VoucherModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          data={voucher}
        />
      )}
    </div>
  );
};

export default MyVoucherList;
