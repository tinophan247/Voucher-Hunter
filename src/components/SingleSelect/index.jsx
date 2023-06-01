import { Box, FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const SingleSelect = ({
  label,
  width = '450px',
  options,
  value,
  onChange,
}) => {
  return (
    <div className='font-medium'>
      <Box
        sx={{
            '& .MuiInputBase-root': { width: width,height :'40px', marginTop: '20px' }
        }}
      >
        <FormControl fullWidth>
          <Select
            value={value}
            onChange={onChange}
            size='small'
            displayEmpty
            renderValue={
              value !== 0 ? undefined : () => <ul className='text-gray-500'>{label}</ul>
            }
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 224
                }
              }
            }}
          >
            {options.length > 0 &&
              options.map((item, index) => (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SingleSelect;