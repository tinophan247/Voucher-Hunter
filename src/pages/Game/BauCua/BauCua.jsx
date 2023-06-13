/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ExtraHeader from "../../../components/ExtraHeader";
import Header from "../../../components/Header";
import DiemCuoc from "./DiemCuoc";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import { useDispatch, useSelector } from "react-redux";
import ModalGame from "../Modal";
import { getAllCustomer, updateCustomer } from "../../../redux/authSlice";
import { getListEvent } from "../../../redux/eventSlice";
import { getListVoucher } from "../../../redux/voucherSlice";

const BauCua = () => {
  const { result } = useSelector((state) => state.BauCua);
  const dispatch = useDispatch();
  const { eventList } = useSelector((state) => state.event);
  const { VoucherList } = useSelector((state) => state.voucher);

  const filterGame = eventList.filter(
    (item) => item.game.gameName === "Bầu cua"
  );
  const selectedVoucher = filterGame.map((item) => item.selectedVoucher);
  const randomVoucher = Math.floor(Math.random() * selectedVoucher.length);

  const filterVoucher = VoucherList.filter(
    (item) => item.code == selectedVoucher[randomVoucher]
  );
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (result) {
      const newData = {
        id: userId,
        voucherList: filterVoucher[0].id,
      };
      userId && dispatch(updateCustomer(newData));
    }
  });

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
    <div className="w-full h-full">
      <Header />
      <ExtraHeader />
      <div className="w-full flex justify-center">
        <div className="bg-game w-[80%] h-[80%] fixed font-pony">
          <DiemCuoc />
          <div className=" mt-10">
            <DanhSachCuoc />
          </div>
          {result === false && (
            <p className="text-4xl text-red-500 text-center">
              Thua rồi bấm chơi lại để chơi tiếp nhé
            </p>
          )}
          <div className="flex justify-center items-center">
            <DanhSachXucXac />
          </div>
        </div>
        {result && (
          <ModalGame
            showModal={result}
            voucher={selectedVoucher[randomVoucher]}
            userId={userId}
          />
        )}
      </div>
    </div>
  );
};

export default BauCua;
