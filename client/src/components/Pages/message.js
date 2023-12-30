import React from "react";
import LeftSidebar from "../allbars/l_sidebar";
import RightSidebar from "../allbars/r_sidebar";
import TempMid from "../allbars/tempMid";

const Message = () => {
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] xl:px-[10%] 2xl:px-[18%] md:px-[6%] sm:px-[2%] px-[0%]">
      <div className="xl:w-[27%] sm:w-[10%]">
        {" "}
        <LeftSidebar pageName={"message"} />
      </div>
      <div className="border border-gray w-[100%] sm:w-[85%] md:w-[75%] xl:w-[70%] lg:w-[55%]  overflow-scroll no-scrollbarr">
        <TempMid />
      </div>
      <div className="xl:w-[47%] lg:w-[40%] hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Message