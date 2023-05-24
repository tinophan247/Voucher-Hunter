import React from "react";
import ExtraHeader from "../../../components/ExtraHeader";
import Header from "../../../components/Header";
import DiemCuoc from "./DiemCuoc";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import { useSelector } from "react-redux";
import ModalGame from "../Modal";

const BauCua = () => {
  const {result} = useSelector(state => state.BauCua);

  return (
    <div className="w-full h-full">
      <Header />
      <ExtraHeader />
      <div className="w-full flex justify-center">
        <div className="bg-game w-[70%] h-[70%] fixed font-pony">
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
        {result === true && <ModalGame showModal={true} />}
      </div>
    </div>
  );
};

export default BauCua;
