/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import XucXac from "./XucXac";
import { useDispatch, useSelector } from "react-redux";
import { DiceBeting, PlayGame } from "../../../redux/ChineseDiceSlice";
import ModalGame from "../Modal";
import Header from "../../../components/Header";
import ExtraHeader from "../../../components/ExtraHeader";
import { getAllCustomer, updateCustomer } from "../../../redux/authSlice";
import { getListEvent } from "../../../redux/eventSlice";
import { getListVoucher } from "../../../redux/voucherSlice";

const TaiXiu = () => {
  const { chineseDice, result, status } = useSelector(
    (state) => state.chineseDice
  );
  const dispatch = useDispatch();
  const { eventList } = useSelector((state) => state.event);
  const { VoucherList } = useSelector((state) => state.voucher);

  const filterGame = eventList.filter(
    (item) => item.game.gameName === "Tài xỉu"
  );
  const selectedVoucher = filterGame.map((item) => item.selectedVoucher);
  const randomVoucher = Math.floor(Math.random() * selectedVoucher.length);

  // eslint-disable-next-line eqeqeq
  const filterVoucher = VoucherList.filter(
    (item) => item.code == selectedVoucher[randomVoucher]
  );
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (status) {
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
        <div className="bg-game w-[70%] h-[70%] fixed font-pony">
          <div className="text-center mt-10 text-4xl">Game Tài Xỉu</div>
          <div className="grid grid-grow-3 grid-flow-col text-center mt-10">
            <div className="col-span-5">
              <button
                onClick={() => {
                  dispatch(DiceBeting(true));
                }}
                className="uppercase w-40 h-40 text-4xl bg-yellow-100 hover:bg-yellow-200 border-4 border-black rounded-xl"
              >
                Tài
              </button>
            </div>
            <div>
              <XucXac />
            </div>
            <div className="col-span-4">
              <button
                onClick={() => {
                  dispatch(DiceBeting(false));
                }}
                className="uppercase w-40 h-40 text-4xl bg-yellow-100 hover:bg-yellow-200  border-4 border-black rounded-xl"
              >
                Xỉu
              </button>
            </div>
          </div>
          <div className="text-center">
            <div>
              <div className="text-4xl">
                BẠN CHỌN:
                <span className="text-red-500 uppercase">
                  {chineseDice ? " Tài" : " Xỉu"}
                </span>
              </div>
              <div className="text-4xl">
                Kết quả:
                <span className="text-red-500 uppercase">
                  {result === undefined ? "" : result ? " Tài" : " Xỉu"}
                </span>
              </div>
              {status === false && (
                <p className="text-4xl text-red-500">
                  Thua rồi, chúc bạn may mắn lần sau nhé
                </p>
              )}
            </div>
            <button
              onClick={() => {
                dispatch(PlayGame());
              }}
              className="w-40 h-20 mt-10 text-3xl bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            >
              Start
            </button>
          </div>
          {status && (
            <ModalGame
              showModal={status}
              voucher={selectedVoucher[randomVoucher]}
              userId={userId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaiXiu;
