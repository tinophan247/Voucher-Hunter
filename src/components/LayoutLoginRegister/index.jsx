import React from "react";
import { Link } from "react-router-dom";

const LayoutLoginRegister = ({ children, name }) => {
  return (
    <div className="w-full mt-10">
      <div className="w-full flex justify-around bg-white">
        <div className="flex">
          <Link
            to="/"
            className="uppercase font-bold text-3xl flex items-center"
          >
            Voucher Hunter
          </Link>
          <p className="flex items-center text-2xl font-medium  ml-20">{name}</p>
        </div>
        <div className="w-40" />
      </div>
      <div className=" h-600 bg-[#578e44] mt-10">
        <div className="w-full flex justify-around">
          <img src="./img/Banner.png" alt="not-found" className="mt-10" />
          <form className="flex items-center">{children}</form>
        </div>
      </div>
    </div>
  );
};

export default LayoutLoginRegister;
