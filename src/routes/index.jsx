import React from 'react';
import HomePage from "../pages/HomePage";
import TaiXiu from "../pages/Game/TaiXiu/TaiXiu";
import KeoBuaBao from "../pages/Game/KeoBuaBao/KeoBuaBao";
import BauCua from "../pages/Game/BauCua/BauCua";
import AdminSite from "../pages/AdminSite";
import VoucherManagement from "../pages/AdminSite/VoucherManagement";
import PartnerManagement from "../pages/AdminSite/ParterManagement";
import EventManagement from "../pages/AdminSite/EventManagement";
import UserManagement from "../pages/AdminSite/UserManagement";
import Register from "../pages/Register";
import TypeOfStore from "../pages/AdminSite/TypeOfStore";
import Login from "../pages/Login";
import StoreManagement from "../pages/AdminSite/StoreManagement";
import { Routes, Route } from "react-router-dom";
import MyVoucherList from '../pages/MyVoucher/MyVoucherList';
import { useSelector } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import PrivateRouteAdmin from '../components/PrivateRoute/Admin';

const Router = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route path='/' element={<PrivateRoute/>} />
      <Route exact path='/loginAdmin' element={<PrivateRouteAdmin isLoggedIn={isLoggedIn}/>} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/TaiXiu" element={<TaiXiu />} />
      <Route path="/KeoBuaBao" element={<KeoBuaBao />} />
      <Route path="/BauCua" element={<BauCua />} />
      <Route path="/my-voucher" element={<MyVoucherList />} />
      <Route path="/admin" element={<AdminSite />} />
      <Route path="/voucher-management" element={<VoucherManagement />} />
      <Route path="/partner-management" element={<PartnerManagement />} />
      <Route path="/event-management" element={<EventManagement />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/type-of-store' element={<TypeOfStore/>} />
      <Route path='/store' element={<StoreManagement/>} />
    </Routes>
  );
};

export default Router;