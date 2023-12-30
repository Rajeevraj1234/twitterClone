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
        <div className="flex justify-center w-[100vw] h-[100vh] xl:px-[10%] 2xl:px-[18%] md:px-[6%] sm:px-[2%] px-[0%]">
          <div className="xl:w-[27%] sm:w-[10%] ">
            <LeftSidebar pageName={"home"} />
          </div>
          <div className="border border-gray sm:w-[85%] md:w-[75%] xl:w-[70%] lg:w-[55%]  overflow-scroll no-scrollbar">
            <MidPage />
          </div>
          <div className="xl:w-[47%] lg:w-[40%] hidden lg:block">
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
