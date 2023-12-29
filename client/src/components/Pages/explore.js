import React from 'react'
import LeftSidebar from "../allbars/l_sidebar";
import ExploreRightSidebar from "../allbars/exploreRightSideBar";
import ExploreMidPage from "../allbars/exploreMid_page";

const Explore = () => {
  return (
    <div className="flex justify-center max-w-[100vw] h-[100vh] px-[15%]">
      <div className="w-[22%]  ">
        {" "}
        <LeftSidebar pageName={"explore"} />
      </div>
      <div className="border border-gray w-[57%]">
        <ExploreMidPage />
      </div>
      <div className="w-[35%] ">
        <ExploreRightSidebar />
      </div>
    </div>
  )
}

export default Explore