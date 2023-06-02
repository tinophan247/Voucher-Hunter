import React from "react";
import { NavLink } from "react-router-dom";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EventIcon from "@mui/icons-material/Event";
import Person2Icon from "@mui/icons-material/Person2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShopIcon from '@mui/icons-material/Shop';
import StorefrontIcon from '@mui/icons-material/Storefront';

const LeftSideBar = () => {
  const activeClassname =
    "border-l-2 border-ct4-dark-green bg-ct4-gray-2 h-10 flex justify-start items-center cursor-pointer font-barlow font-semibold text-ct4-dark-green uppercase";
  const unactiveClassname =
    "h-10 flex justify-start items-center cursor-pointer font-barlow font-medium text-ct4-gray-3 uppercase";

  const pathname = window.location.pathname;

  return (
    <div className="w-80 h-screen border-r border-ct4-border-gray ">
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4">
          <AssessmentIcon
            stroke={pathname === "/admin" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/admin" ? "text-[#457900]" : "text-black"
            }`}
          >
            Report
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/voucher-management"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4">
          <LocalActivityIcon
            stroke={pathname === "/voucher-management" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/voucher-management"
                ? "text-[#457900]"
                : "text-black"
            }`}
          >
            Voucher Management
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/partner-management"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4">
          <HandshakeIcon
            stroke={pathname === "/partner-management" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/partner-management"
                ? "text-[#457900]"
                : "text-black"
            }`}
          >
            Partner Management
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/event-management"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4">
          <EventIcon
            stroke={pathname === "/event-management" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/event-management" ? "text-[#457900]" : "text-black"
            }`}
          >
            Event Management
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/user-management"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4 ">
          <Person2Icon
            stroke={pathname === "/user-management" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/user-management" ? "text-[#457900]" : "text-black"
            }`}
          >
            User Management
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/store"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4 ">
          <StorefrontIcon
            stroke={pathname === "/store" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/store" ? "text-[#457900]" : "text-black"
            }`}
          >
            Store Management
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/type-of-store"
        className={({ isActive }) =>
          isActive ? activeClassname : unactiveClassname
        }
      >
        <div className="flex ml-4 ">
          <ShopIcon
            stroke={pathname === "/type-of-store" ? "#457900" : "#888888"}
          />
          <p
            className={`ml-2 text-base ${
              pathname === "/type-of-store" ? "text-[#457900]" : "text-black"
            }`}
          >
            Type of Store
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
