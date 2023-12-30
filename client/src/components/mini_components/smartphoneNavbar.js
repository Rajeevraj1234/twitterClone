import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { RiNotification2Line, RiNotification2Fill } from "react-icons/ri";
import { HiOutlineMail, HiMail } from "react-icons/hi";

import { FaRegUser, FaUser } from "react-icons/fa";

import { useUserLoginContextProvider } from "../context/userLoginContext";

const SmartphoneNavbar = ({ pageName }) => {
  const { userLogin } = useUserLoginContextProvider();

  let pathVal = pageName;
  if (!pathVal) {
    pathVal = "home";
  }
  const [active, setActive] = useState(pageName);

  const handleClick = (val) => {
    setActive(val);
  };
  return (
    <footer class="bg-white px-1 border-gray-200 border-t-2 fixed inset-x-0 bottom-0 shadow-inner sm:hidden ">
      <div className="flex justify-evenly items-center">
        <span
          className="rounded-3xl p-3 hover:bg-gray-200"
          onClick={() => {
            handleClick("home");
          }}
        >
          {active === "home" ? (
            <NavLink to={"/"}>
              <span className="flex items-center text-3xl gap-2 ml-[-2px]">
                <MdHomeFilled />
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/"}>
              <span className="flex items-center text-2xl gap-2">
                <GrHomeRounded />
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200"
          onClick={() => {
            handleClick("explore");
          }}
        >
          {active === "explore" ? (
            <NavLink to={"/explore"}>
              <span className="flex items-center text-2xl gap-2">
                <ImSearch />
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/explore"}>
              <span className="flex items-center text-2xl gap-2">
                <BsSearch />
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("profile");
          }}
        >
          {active === "profile" ? (
            <NavLink to={`/profile/${userLogin._id}`}>
              <span className="flex items-center text-2xl gap-2">
                <FaUser />
              </span>
            </NavLink>
          ) : (
            <NavLink to={`/profile/${userLogin?._id}`}>
              <span className="flex items-center text-2xl gap-2">
                <FaRegUser />
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("notification");
          }}
        >
          {active === "notification" ? (
            <NavLink to={"/notification"}>
              <span className="flex items-center text-2xl gap-2">
                <RiNotification2Fill />
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/notification"}>
              <span className="flex items-center text-2xl gap-2">
                <RiNotification2Line />
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("message");
          }}
        >
          {active === "message" ? (
            <NavLink to={"/message"}>
              <span className="flex items-center text-2xl gap-2">
                <HiMail />
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/message"}>
              <span className="flex items-center text-2xl gap-2">
                <HiOutlineMail />
              </span>
            </NavLink>
          )}
        </span>
      </div>
    </footer>
  );
};

export default SmartphoneNavbar;
