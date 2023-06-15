/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
  const userId = sessionStorage.getItem("id");

  return (
    <div className=" grid grid-cols-3 gap-20 mx-20">
      <img
        src="./img/Banner.png"
        alt="not-found"
        className="col-span-2 h-680 w-full"
      />
      {userId ? (
        <div>
          <Link to="/TaiXiu">
            <img
              src="./img/gameXucXac/gameTaiXiu.jpg"
              className="h-200 w-full border shadow-xl cursor-pointer"
              alt="not-found"
            />
          </Link>
          <Link to="/KeoBuaBao">
            <img
              src="./img/gameOanTuXi/gameOanTuXi.jpg"
              className="h-200 w-full mt-10 border shadow-xl cursor-pointer"
              alt="not-found"
            />
          </Link>
          <Link to="/BauCua">
            <img
              src="./img/gameBauCua/gameBauCua.jpg"
              className="h-200 w-full mt-10 border shadow-xl cursor-pointer"
              alt="not-found"
            />
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center h-800 w-full border shadow-xl bg-[#578e44] text-white font-bold ">
          <p className="text-4xl w-[400px] text-center">Bạn hãy đăng nhập để chơi game nhận voucher nhé</p>
        </div>
      )}
    </div>
  );
};

export default GamePage;
