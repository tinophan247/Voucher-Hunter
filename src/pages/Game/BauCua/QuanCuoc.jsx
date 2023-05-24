import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { BauCuaBetingDown, BauCuaBetingUp } from "../../../redux/BauCua";

const QuanCuoc = ({ quanCuoc }) => {
  const dispatch = useDispatch();

  return (
    <div className=" p-3">
      <img className="w-40" src={quanCuoc.img} alt="" />
      <div className="bg-green-500 mt-1 pb-2 text-center rounded-lg w-40 h-10 flex justify-between px-3">
        <button className="bg-red-500 w-10 h-10 text-white rounded-md" onClick={() =>{
          dispatch(BauCuaBetingDown(quanCuoc))
        }}>
          <RemoveIcon />
        </button>
        <span className="h-10 w-10 flex items-center justify-center text-2xl text-yellow-300">
          {quanCuoc.betingScore}
        </span>
        <button className="bg-red-500  w-10 h-10 text-white rounded-md "
        onClick={() =>{
          dispatch(BauCuaBetingUp(quanCuoc))
        }}>
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default QuanCuoc;
