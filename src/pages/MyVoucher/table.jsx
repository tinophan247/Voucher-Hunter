import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./styledTable";
import { VoucherData } from "../../constant";
import MyVoucherTR from "./MyVoucherTR";


const MyVoucherTable = () => {
  return (
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
              Đối tượng áp dụng
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
          {VoucherData.length > 0 && VoucherData.map((item, index) => (
           <MyVoucherTR item={item} key={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyVoucherTable;
