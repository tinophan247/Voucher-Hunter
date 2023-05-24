import React from "react";
import QuanCuoc from "./QuanCuoc";
import { useSelector } from "react-redux";

const DanhSachCuoc = () => {
  const { BauCuaArray } = useSelector((state) => state.BauCua);

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-6 gap-10">
        {BauCuaArray.map((item, index) => {
          return <QuanCuoc quanCuoc={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DanhSachCuoc;
