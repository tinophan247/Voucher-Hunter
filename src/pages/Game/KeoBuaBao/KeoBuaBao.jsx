import React from "react";
import Player from "./Player";
import Computer from "./Computer";
import { useDispatch, useSelector } from "react-redux";
import { EndGame, Random } from "../../../redux/KBBSlice";
import ModalGame from "../Modal";
import Header from "../../../components/Header";
import ExtraHeader from "../../../components/ExtraHeader";

const KeoBuaBao = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.KBB);

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
          {result === "Thắng" && <ModalGame showModal={true} />}
        </div>
      </div>
    </div>
  );
};

export default KeoBuaBao;
