import React from "react";
import { useSelector } from "react-redux";

const Computer = () => {
  const { computer } = useSelector((state) => state.KBB);

  let keyframe = `@keyframes randomItem${Date.now()} {
        0% {left: -50px;}
        25% {left: 100px;}
        50% {left: -50px;}
        75% {left: 100px;}
        100% {left: 0;}
      }`;

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <style>{keyframe}</style>
      <div className="border-4 w-32 h-32 bg-white rounded-xl border-green-500 relative">
        <img
          style={{
            transform: "rotate(120deg)",
            animation: `randomItem${Date.now()} 0.5s`,
            left: "10%",
          }}
          className="mt-3 absolute "
          width={100}
          height={100}
          src={computer.img}
          alt="not-found"
        />
      </div>
      <div
        className="relative bg-green-500 after:absolute after:bottom-0 after:left-1/2 after:border-8 after:border-transparent after:border-t-green-500 mt-4 "
        style={{ borderRadius: ".4em" }}
      ></div>
      <img
        className="w-200 h-200"
        src="./img/gameOanTuXi/playerComputer.png"
        alt="not-found"
      />
    </div>
  );
};

export default Computer;
