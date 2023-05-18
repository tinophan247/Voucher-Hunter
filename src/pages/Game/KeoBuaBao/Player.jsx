import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { KBBBeting } from "../../../redux/KBBSlice";

const Player = () => {
  const { KBBArray } = useSelector((state) => state.KBB);
  const dispatch = useDispatch();

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="border-4 w-32 h-32 bg-white rounded-xl border-green-500">
        <img
          style={{ transform: "rotate(120deg)" }}
          className="mt-3"
          width={100}
          height={100}
          src="./img/gameOanTuXi/bao.png"
          alt="not-found"
        />
      </div>
      <div
        className="relative bg-green-500 after:absolute after:bottom-0 after:left-1/2 after:border-8 after:border-transparent after:border-t-green-500 mt-4 "
        style={{ borderRadius: ".4em" }}
      ></div>
      <img
        className="w-200 h-200"
        src="./img/gameOanTuXi/player.png"
        alt="not-found"
      />
      <div className="grid grid-grow-3 grid-flow-col">
        <div className="grid grid-cols-3 gap-3">
          {KBBArray.map((item, index) => {
            let border = {};
            if (item.beting) {
              border = { border: "3px solid orange" };
            }
            return (
              <button
                className="w-16 h-16 bg-gray-100 cursor-pointer"
                onClick={() => {
                  dispatch(KBBBeting(item.id));
                }}
                style={border}
                key={index}
              >
                <img
                  width={50}
                  height={50}
                  src={item.img}
                  alt="not-found"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Player;
