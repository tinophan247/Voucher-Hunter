import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const TextFields = ({ required, value, onChange, type, width = '600px', height = '40px', label, valid, helperText }) => {
  return (
    <div className='text-base font-medium'>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { width: width, height: height, marginTop: '20px' }
        }}
        autoComplete='off'
      >
        <TextField
          label={label}
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={type}
        />
      </Box>
      <span hidden={valid || !required} className='text-red-500'>
        {value?.toString().trim() && !valid ? helperText : `Bạn chưa nhập ${label}`}
      </span>
    </div>
  );
};

export default TextFields;