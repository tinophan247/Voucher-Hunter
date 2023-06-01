import React, { useEffect } from "react";
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
import { PartnerData } from "../../../constant";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { getListPartner } from "../../../redux/partnerSlice";

const PartnerManagement = () => {
  const dispatch = useDispatch();  

  useEffect(() =>{
    dispatch(getListPartner());
  })

  return (
    <AdminSiteLayout>
      <div>
        <p className="text-base uppercase font-medium mb-10">
          Quản trị Đối tác
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
                  Tên Đối Tác
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
                  Loại cửa hàng
                </StyledTableCell>
                <StyledTableCell
                  style={{ textTransform: "uppercase" }}
                  align="center"
                >
                  Loại đối tác
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
              {PartnerData.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.desc}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.storeType}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.partnerType}
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

export default PartnerManagement;
