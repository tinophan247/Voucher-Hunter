/* eslint-disable eqeqeq */
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
  const { VoucherList } = useSelector((state) => state.voucher);
  const [showModal, setShowModal] = useState(false);
  const [voucher, setVoucher] = useState(defaultVoucher);
  const userId = sessionStorage.getItem("id");

  //Dò id người dùng xem id nào bằng với id đã đăng nhập
  const filteruser = userList.filter((item) => item.dataValues.id == userId);

  //Dò trong danh sách voucher, voucher nào có code bằng với voucher trong list voucher của người dùng
  const filterFunc = (voucherList , user) => {
    let list = []
    user[0].dataValues.voucherList.forEach(item => {
      voucherList.forEach(it => {
        if(it.code === item) {
          list.push(it)
        }
      })
    })
    return list
  }

  const myVoucherList = filterFunc(VoucherList,filteruser)

  const handleCloseModal = () => {
    setShowModal(false);
    setVoucher(defaultVoucher);
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
                {myVoucherList.length > 0 &&
                  myVoucherList.map((item, index) => (
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
