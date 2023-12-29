import React from "react";
import Search from "../mini_components/search";
import TrendingPage from "../mini_components/trendingPage";
import WhoToFollow from "../mini_components/whoToFollow";

const RightSidebar = () => {
  return (
    <div className="p-2 px-5 flex flex-col h-[100vh] justify-start gap-3 select-none">
      <Search />
      <div className="bg-gray-100 rounded-xl w-[100%] pb-2">
        <h4 className="font-bold text-xl mb-2 p-3">What's happening</h4>
        <TrendingPage />
        <a href="/explore" className="ml-3 text-blue-400">
          Show more
        </a>
      </div>
      <WhoToFollow />
    </div>
  );
};

export default RightSidebar;
