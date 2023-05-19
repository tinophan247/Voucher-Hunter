import React from "react";
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
import { VoucherData } from "../../../constant";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const VoucherManagement = () => {
  return (
    <AdminSiteLayout>
      <div>
        <p className="text-base uppercase font-medium mb-10">
          Quản trị Voucher
        </p>
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
                  Tên Voucher
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
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
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Điều kiện 1
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
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
              {VoucherData.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.desc}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.discount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.condition1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.condition2}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.location}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.start}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.expired}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link
                      to="/my-voucher-details"
                      className="bg-green-neon w-10 h-10 m-auto flex items-center justify-center rounded-lg cursor-pointer"
                    >
                      <EditIcon />
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </AdminSiteLayout>
  );
};

export default VoucherManagement;
