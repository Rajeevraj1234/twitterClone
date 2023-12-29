import React from "react";
import LeftSidebar from "../allbars/l_sidebar";
import RightSidebar from "../allbars/r_sidebar";
import MidPage from "../allbars/mid_page";
import { useUserLoginContextProvider } from "../context/userLoginContext";
import Login from "../Pages/login"


const MainPage = () => {
  
  const { userLogin } = useUserLoginContextProvider();
  
  return (
    <>
    {userLogin ? (
        <div className="flex justify-center w-[100vw] h-[100vh] px-[15%]">
          <div className="w-[22%]  ">
            <LeftSidebar pageName={"home"} />
          </div>
          <div className="border border-gray w-[57%] overflow-scroll no-scrollbar">
            <MidPage />
          </div>
          <div className="w-[37%] ">
            <RightSidebar />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default MainPage;
