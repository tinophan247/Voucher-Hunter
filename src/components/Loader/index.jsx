import * as React from 'react';
import { Backdrop, Box, CircularProgress } from '@mui/material';

const CircularProgressCustom = ({ color = '#457900' }) => {
  return (
    <CircularProgress
      sx={{
        color: color
      }}
    />
  );
};

const Loader = ({ show = false, isScreenLoading = false }) => {
  return isScreenLoading ? (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={show} close={!show}>
      <CircularProgressCustom />
    </Backdrop>
  ) : (
    <Box sx={{ display: 'flex' }}>
      <CircularProgressCustom />
    </Box>
  );
};
export default Loader;