import React from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
  return (
    <div className=" grid grid-cols-3 gap-20 mx-20">
      <img src="./img/Banner.png" alt="not-found" className="col-span-2 h-680 w-full"/>
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
    </div>
  );
};

export default GamePage;
