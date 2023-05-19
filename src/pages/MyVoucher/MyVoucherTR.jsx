import React from "react";
import { StyledTableCell, StyledTableRow } from "./styledTable";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const MyVoucherTR = ({ item }) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <img src={item.voucherImg} className="w-400 h-28" alt="not-found" />
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        {item.location}
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        {item.expired}
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        <Link to='/my-voucher-details' className="bg-green-neon w-10 h-10 m-auto flex items-center justify-center rounded-lg cursor-pointer">
          <EditIcon />
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default MyVoucherTR;
