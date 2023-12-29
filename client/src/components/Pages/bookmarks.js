import React from "react";
import LeftSidebar from "../allbars/l_sidebar";
import RightSidebar from "../allbars/r_sidebar";
import TempMid from "../allbars/tempMid";
const Bookmarks = () => {
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] px-[15%]">
      <div className="w-[22%]  ">
        {" "}
        <LeftSidebar pageName={"bookmarks"} />
      </div>
      <div className="border border-gray w-[57%] overflow-scroll no-scrollbar">
        <TempMid />
      </div>
      <div className="w-[37%] ">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Bookmarks