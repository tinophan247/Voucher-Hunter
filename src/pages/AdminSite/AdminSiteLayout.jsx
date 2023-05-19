import React from "react";
import Header from "../../components/Header";
import LeftSideBar from "../../components/LeftSideBar/index.";

const AdminSiteLayout = ({children}) => {
  return (
    <div>
      <Header />
      <div className='flex '>
        <LeftSideBar />
        <div className='px-8 my-6 w-full grid'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminSiteLayout;
