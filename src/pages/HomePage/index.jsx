import React from "react";
import Header from "../../components/Header";
import GamePage from "../Game";
import ExtraHeader from "../../components/ExtraHeader";

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <ExtraHeader/>
      <GamePage/>
      <div className="text-base uppercase h-20 flex justify-center items-center font-medium">
        Các thông tin khác, địa chỉ , số điện thoại, thông tin công ty
      </div>
    </div>
  );
};

export default HomePage;
