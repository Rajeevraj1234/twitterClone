import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { RiNotification2Line, RiNotification2Fill } from "react-icons/ri";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { RiFileList3Line, RiFileList3Fill } from "react-icons/ri";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { FaRegUser, FaUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { useUserLoginContextProvider } from "../context/userLoginContext";
import { GiFeather } from "react-icons/gi";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const LeftSidebar = ({ pageName }) => {
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
    <div 
      
      className="p-3 select-none fixed h-[100vh] overflow-scroll no-scrollbar hidden sm:block ">
      <span className="text-3xl">
        <RiTwitterXLine />
      </span>
      <div className="mt-10 flex flex-col gap-2">
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
                <span className="text-xl font-semibold hidden xl:block ">
                  Home
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/"}>
              <span className="flex items-center text-2xl gap-2">
                <GrHomeRounded />
                <span className="text-xl hidden xl:block">Home</span>
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
                <span className="text-xl font-semibold hidden xl:block">
                  Explore
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/explore"}>
              <span className="flex items-center text-2xl gap-2">
                <BsSearch />
                <span className="text-xl hidden xl:block ">Explore</span>
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
                <span className="text-xl font-semibold hidden xl:block">
                  Notification
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/notification"}>
              <span className="flex items-center text-2xl gap-2">
                <RiNotification2Line />
                <span className="text-xl hidden xl:block">Notification</span>
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
                <span className="text-xl font-semibold hidden xl:block">
                  Message
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/message"}>
              <span className="flex items-center text-2xl gap-2">
                <HiOutlineMail />
                <span className="text-xl hidden xl:block">Message </span>
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("lists");
          }}
        >
          {active === "lists" ? (
            <NavLink to={"/lists"}>
              <span className="flex items-center text-2xl gap-2">
                <RiFileList3Fill />
                <span className="text-xl font-semibold hidden xl:block">
                  Lists
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/lists"}>
              <span className="flex items-center text-2xl gap-2">
                <RiFileList3Line />
                <span className="text-xl hidden xl:block">Lists</span>
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("bookmarks");
          }}
        >
          {active === "bookmarks" ? (
            <NavLink to={"/bookmarks"}>
              <span className="flex items-center text-2xl gap-2">
                <FaBookmark />
                <span className="text-xl font-semibold hidden xl:block">
                  Bookmarks
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/bookmarks"}>
              <span className="flex items-center text-2xl gap-2">
                <FaRegBookmark />
                <span className="text-xl hidden xl:block">Bookmarks</span>
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("communities");
          }}
        >
          {active === "communities" ? (
            <NavLink to={"/communities"}>
              <span className="flex items-center text-2xl gap-2">
                <BsPeopleFill />
                <span className="text-xl font-semibold hidden xl:block">
                  Communities
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={"/communities"}>
              <span className="flex items-center text-2xl gap-2">
                <BsPeople />
                <span className="text-xl hidden xl:block">Communities</span>
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("premium");
          }}
        >
          {active === "premium" ? (
            <span className="flex items-center text-2xl gap-2">
              <RiTwitterXLine />
              <span className="text-xl font-semibold hidden xl:block">
                Premium
              </span>
            </span>
          ) : (
            <span className="flex items-center text-2xl gap-2">
              <RiTwitterXLine />
              <span className="text-xl hidden xl:block">Premium</span>
            </span>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("profile");
          }}
        >
          {active === "profile" ? (
            <NavLink to={`/profile/${userLogin?.username}`}>
              <span className="flex items-center text-2xl gap-2">
                <FaUser />
                <span className="text-xl font-semibold hidden xl:block">
                  Profile
                </span>
              </span>
            </NavLink>
          ) : (
            <NavLink to={`/profile/${userLogin?.username}`}>
              <span className="flex items-center text-2xl gap-2">
                <FaRegUser />
                <span className="text-xl hidden xl:block">Profile</span>
              </span>
            </NavLink>
          )}
        </span>
        <span
          className="rounded-3xl p-3 hover:bg-gray-200 "
          onClick={() => {
            handleClick("more");
          }}
        >
          {active === "more" ? (
            <span className="flex items-center relative text-2xl gap-2">
              <CgMoreO />
              <span className="text-xl font-semibold hidden xl:block">
                More
              </span>
              <span className="absolute inset-0 top-[-200%] left-[-5%] h-[100px] w-[200px] bg-white shadow-xl border rounded-xl "           >
                <form action="http://localhost:8000/user/logout" method="post">
                  <button
                  type="submit"
                  className="font-bold text-lg p-3 w-[100%] hover:bg-gray-100 sm:hidden xl:block"
                  >
                  <span className="flex items-center gap-2">      
                    <HiOutlineLogout /> 
                    Log Out
                    </span>
                  </button>
                </form>
                <span className="font-bold text-lg p-3 w-[100%] hover:bg-gray-100 sm:hidden xl:block flex items-center gap-2" >
                  <span className="flex gap-2 items-center">
                    <IoSettingsOutline/> Setting
                  </span> 
                </span>
              </span>
            </span>
          ) : (
            <span className="flex items-center text-2xl gap-2">
              <CgMoreO />
              <span className="text-xl hidden xl:block">More</span>
            </span>
          )}
        </span>
      </div>

        
      {userLogin && (
        <div className="flex items-center justify-between mt-16 rounded-3xl hover:bg-gray-200 p-2">
          <div className="flex items-center gap-2">
            <div className="w-[45px] h-[40px] contain border rounded-full overflow-hidden">
              <img
                src={`http://localhost:8000/${userLogin?.profileImage}`}
                alt="no pic"
              />
            </div>
            <div className="flex flex-col sm:hidden xl:flex ">
              <span className="font-bold text-sm">{userLogin?.fullname}</span>
              <span className="text-sm">{userLogin?.username}</span>
            </div>
          </div>
          <div className="text-2xl sm:hidden xl:block">
            <FiMoreHorizontal />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
