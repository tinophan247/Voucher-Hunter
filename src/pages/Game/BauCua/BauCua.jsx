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
  const { userList } = useSelector((state) => state.auth);
  const userId = sessionStorage.getItem("id");

  //Lọc từ event các event có game là Tài Xỉu
  const filterEvent = eventList.filter(
    (item) => {
      const index = item.dataValues.gameList.findIndex(i => i == "Bầu cua" )
      return index !== -1
    }
  );
  //lấy list voucher được tạo từ event được lọc
  const selectedVoucher = filterEvent.map((item) => item.dataValues.selectedVoucher);

  //Lấy ngẫu nhiên 1 voucher trong list voucher được chọn
  const randomVoucher = Math.floor(Math.random() * selectedVoucher.length);

  //Dò trong danh sách voucher, voucher nào có name bằng với voucher của event
  const filterVoucher = VoucherList.filter(
    (item) => item.name === selectedVoucher[randomVoucher]
  );

  //Lọc ra user có id bằng với id đăng nhập
  const filterUser = userList.filter(item => item.dataValues.id == userId)

  //Nối mảng voucher hiện có và voucher mới
  const concatVoucherList = filterUser[0].dataValues.voucherList.concat([filterVoucher[0].name]);
  console.log(concatVoucherList)

  useEffect(() => {
    if (result) {
      const newData = {
        id: userId,
        voucherList: concatVoucherList,
      };
      userId && dispatch(updateCustomer(newData));
    }
  },[result]);

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
