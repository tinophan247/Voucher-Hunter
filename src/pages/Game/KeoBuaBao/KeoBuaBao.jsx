/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Player from "./Player";
import Computer from "./Computer";
import { useDispatch, useSelector } from "react-redux";
import { EndGame, Random } from "../../../redux/KBBSlice";
import ModalGame from "../Modal";
import Header from "../../../components/Header";
import ExtraHeader from "../../../components/ExtraHeader";
import { getAllCustomer, updateCustomer } from "../../../redux/authSlice";
import { getListEvent } from "../../../redux/eventSlice";
import { getListVoucher } from "../../../redux/voucherSlice";

const KeoBuaBao = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.KBB);
  const { eventList } = useSelector((state) => state.event);
  const { VoucherList } = useSelector((state) => state.voucher);
  const { userList } = useSelector((state) => state.auth);
  const userId = sessionStorage.getItem("id");

  //Lọc từ event các event có game là Tài Xỉu
  const filterEvent = eventList.filter(
    (item) => {
      const index = item.dataValues.gameList.findIndex(i => i == "Kéo búa bao" )
      return index !== -1
    }
  );
  //lấy list voucher được tạo từ event được lọc
  const selectedVoucher = filterEvent.map((item) => item.dataValues.selectedVoucher);

  //Lấy ngẫu nhiên 1 voucher trong list voucher được chọn
  const randomVoucher = Math.floor(Math.random() * selectedVoucher.length);

  //Dò trong danh sách voucher, voucher nào có code bằng với voucher của event
  const filterVoucher = VoucherList.filter(
    (item) => item.name === selectedVoucher[randomVoucher]
  );

  //Lọc ra user có id bằng với id đăng nhập
  const filterUser = userList.filter(item => item.dataValues.id == userId)

  //Nối mảng voucher hiện có và voucher mới
  const concatVoucherList = filterUser[0].dataValues.voucherList.concat([filterVoucher[0].name]);

  const handlePlayGame = () => {
    let count = 0;
    let randomComputerItem = setInterval(() => {
      let rdNumber = Math.floor(Math.random() * 3);
      dispatch(Random(rdNumber));
      count++;
      if (count > 10) {
        //Dừng hàm setInterval
        clearInterval(randomComputerItem);
        dispatch(EndGame());
      }
    }, 100);
  };

  useEffect(() => {
    if (result === "Thắng") {
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
        <div className="bg-game w-[70%] h-[70%] fixed font-pony">
          <div className="grid grid-grow-3 grid-flow-col text-center mt-20 ">
            <div className="col-span-3 ">
              <Player />
            </div>
            <div className="mt-20">
              {result === "Thua" && (
                <p className="text-4xl text-red-500">
                  Thua rồi, chúc bạn may mắn lần sau nhé
                </p>
              )}
              {result === "Hòa" && (
                <p className="text-4xl text-red-500">Hòa rồi, chơi lại nhé</p>
              )}
              <button
                onClick={() => {
                  handlePlayGame();
                }}
                className="w-40 h-20 mt-20 text-center text-3xl bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
              >
                Start
              </button>
            </div>
            <div className="col-span-4">
              <Computer />
            </div>
          </div>
          {result === "Thắng" && (
            <ModalGame
              showModal={true}
              voucher={selectedVoucher[randomVoucher]}
              userId={userId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default KeoBuaBao;
