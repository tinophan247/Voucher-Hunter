import * as React from "react";
import { Checkbox, FormControl, MenuItem, Select } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

const MultipleSelect = ({
  label,
  required,
  value = [],
  onChange,
  valid,
  width = "500px",
  options,
  isEdit
}) => {
  // const formatValue = (selected) => {
  //   let newFormatValue = selected
  //     .map((item) => options.find((e) => e.value === item).label)
  //     .slice(0, 2)
  //     .join(", ");
  //   if (selected.length > 2) {
  //     newFormatValue += ` (+${selected.length - 2})`;
  //   }

  //   return newFormatValue;
  // };
  console.log(value)

  return (
    <div>
      <div className="text-base font-medium">
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={value}
            onChange={onChange}
            sx={{ marginTop: "20px", height: "40px", width: width }}
            MenuProps={MenuProps}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span className="text-gray-500">{label}</span>;
              }
              return selected.join(', ') 
            }}
          >
            {options.length > 0 &&
              options.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                    checked={value.indexOf(item.value) > -1}
                    checkedIcon={<CheckBoxIcon />}
                  />
                  {item.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <span hidden={valid || !required} className="text-red-500">
        {label && `Bạn chưa nhập ${label}`}
      </span>
    </div>
  );
};

export default MultipleSelect;
