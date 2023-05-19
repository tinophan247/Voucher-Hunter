import React from 'react'
import AdminSiteLayout from '../AdminSiteLayout';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../MyVoucher/styledTable";
import { UserData } from "../../../constant";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const UserManagement = () => {
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
                style={{ textTransform: "uppercase" }}
                align="center"
              >
                Tên Đăng Nhập
              </StyledTableCell>
              <StyledTableCell
                style={{ textTransform: "uppercase" }}
                align="center"
              >
                Mật khẩu
              </StyledTableCell>
              <StyledTableCell
                style={{ textTransform: "uppercase" }}
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
            {UserData.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="center">{item.username}</StyledTableCell>
                <StyledTableCell align="center">{item.password}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.voucherList.toString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.role}
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
  )
}

export default UserManagement;