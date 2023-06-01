import { Box, FormControl} from "@mui/material";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const DatePickers = ({ width = "450px", value, onChange }) => {
  return (
    <div className="text-base font-medium">
      <Box
        sx={{
          "& .MuiInputBase-root": {
            width: width,
            height: "40px",
            marginTop: "8px",
          },
        }}
      >
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            label={'Ngày/Tháng/Năm sinh'}
              value={value}
              onChange={onChange}
              width={width}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </FormControl>
      </Box>
    </div>
  );
};

export default DatePickers;
