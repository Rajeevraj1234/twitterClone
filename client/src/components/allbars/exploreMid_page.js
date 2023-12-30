import React from "react";
import ExploreSection from "../mini_components/trendingPage";
import SearchBar from "../mini_components/search";
import TopMidPage from "../mini_components/topSectionOfExplore";
import SmartNavbar from "../mini_components/smartphoneNavbar";
import { RiSettings3Line } from "react-icons/ri";

const MidPage = () => {
  return (
    <div className="w-full h-full select-none mt-2">
      <div className="flex  items-center gap-5 ps-3">
        <div className="w-[90%]"><SearchBar /></div>
        <div className="w-[8%] text-2xl"><RiSettings3Line /></div>
      </div>
      <div className="mt-5">
        <TopMidPage />
      </div>
      <div className="mt-8">
        <ExploreSection />
      </div>
        <div>
          <SmartNavbar pageName={"explore"}/>
        </div>
    </div>
  );
};

export default MidPage;
