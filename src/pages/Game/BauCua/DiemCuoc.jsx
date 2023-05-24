import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayAgain, PlayGame } from "../../../redux/BauCua";

const DiemCuoc = () => {
  const {totalScore} = useSelector(state => state.BauCua);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="text-center text-4xl uppercase mt-10">Game Bầu Cua</p>
      <div className="mt-10 flex justify-evenly">
        <div className="text-center ">
          <span className="text-xl rounded-lg p-3 text-white bg-red-500">
            Lượt cược : <span className="text-yellow-300">{totalScore.toLocaleString()}</span>
          </span>
        </div>
        <div className="text-center -mt-3 ">
          <button className="text-3xl w-36 rounded-lg p-3 text-white bg-green-500 " onClick={() => {dispatch(PlayGame())}}>
            Chơi 
          </button>
        </div>
        <div className="text-center -mt-3">
          <button onClick={() => {dispatch(PlayAgain())}} className="text-xl w-36 rounded-lg p-3 text-black bg-yellow-300 ">
            Chơi lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiemCuoc;
