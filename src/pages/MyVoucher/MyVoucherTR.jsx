import React from "react";
import { StyledTableCell, StyledTableRow } from "./styledTable";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

const MyVoucherTR = ({ item, handleEdit }) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <img
          src={item.img ? item.img : "./img/Banner.png"}
          className="w-400 h-28"
          alt="not-found"
        />
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        {item.name}
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        {item.code}
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        {moment(item.endDate).format("DD/MM/YYYY")}
      </StyledTableCell>
      <StyledTableCell
        style={{ fontWeight: 600, fontSize: "18px" }}
        align="center"
      >
        <div
          onClick={handleEdit}
          className="bg-green-neon w-10 h-10 m-auto flex items-center justify-center rounded-lg cursor-pointer"
        >
          <EditIcon />
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default MyVoucherTR;
