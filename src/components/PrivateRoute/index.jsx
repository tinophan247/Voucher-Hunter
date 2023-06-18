import React from "react";
import { Link, Navigate } from "react-router-dom";
import LayoutLoginRegister from "../LayoutLoginRegister";

const PrivateRoute = ({isLoggedIn}) => {
  return isLoggedIn ? (<Navigate to='/home' replace />) :(
    <LayoutLoginRegister>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[400px] h-[400px] bg-white rounded-lg flex justify-center items-center ">
          <div>
            <p className="text-2xl">Bạn muốn đăng nhập ở đâu?</p>
            <div className="flex justify-evenly mt-5">
              <Link to={"/home"}>
                <button className="bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg font-semibold ">
                  Trang khách
                </button>
              </Link>
              <Link to={"/loginAdmin"}>
                <button className="bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg font-semibold  ">
                  Trang Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoginRegister>
  );
};

export default PrivateRoute;
