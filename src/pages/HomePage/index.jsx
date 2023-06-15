/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import GamePage from "../Game";
import ExtraHeader from "../../components/ExtraHeader";
import { useDispatch } from "react-redux";
import { getListEvent } from "../../redux/eventSlice";
import { getAllCustomer } from "../../redux/authSlice";
import { getListVoucher } from "../../redux/voucherSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListEvent());
  }, []);

  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);

  useEffect(() => {
    dispatch(getListVoucher());
  }, []);
  
  return (
    <div className="w-full">
      <Header />
      <ExtraHeader/>
      <GamePage/>
      <div className="text-base uppercase h-20 flex justify-center items-center font-medium">
        Các thông tin khác, địa chỉ , số điện thoại, thông tin công ty
      </div>
    </div>
  );
};

export default HomePage;
