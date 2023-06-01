import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputAdornment, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const TextFieldPassword = ({ required, value, onChange, width = '600px', height = '40px', label}) => {
  const [showPass, setShowPass] = useState(false);

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
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={showPass ? "text" : "password"}
          label={label}
          InputProps={
            {
              endAdornment: (
                <InputAdornment position='end'>
                  <div onClick={() => {setShowPass(!showPass)}} className=' cursor-pointer'>
                      {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </InputAdornment>
              )
            }
          }
        />
      </Box>
    </div>
  );
};

export default TextFieldPassword;



