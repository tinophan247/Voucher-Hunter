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
import { EventData } from "../../../constant";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const EventManagement = () => {
  return (
    <AdminSiteLayout>
      <div>
        <p className="text-base uppercase font-medium mb-10">
          Quản trị Chiến dịch
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
                  Tên Chiến Dịch
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
                  style={{ textTransform: "uppercase" }}
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
              {EventData.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.desc}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.partner}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.storeType}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.game}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.selectedVoucher}
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

export default EventManagement;
