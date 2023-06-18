import React from "react";
import {  Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({isLoggedIn}) => {
  return isLoggedIn ? (<Navigate to='/admin' replace />) : (<Navigate to='/login' replace />)
};

export default PrivateRouteAdmin;
