import React, { useState } from "react";

const TopSectionOfExplore = () => {
  const [active, setActive] = useState("forYou");

  return (
    <div className="sticky top-0 z-10 backdrop-blur-2xl bg-white/30">
      <div className="flex w-[100%]  font-semibold text-md ">
        {active === "forYou" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">For you</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200"
            onClick={() => setActive("forYou")}
          >
            For you
          </div>
        )}
        {active === "trending" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Trending</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200"
            onClick={() => setActive("trending")}
          >
            Trending
          </div>
        )}
        {active === "news" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">News</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 "
            onClick={() => setActive("news")}
          >
            News
          </div>
        )}
        {active === "sports" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Sports</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 "
            onClick={() => setActive("sports")}
          >
            Sports
          </div>
        )}
        {active === "entertrainmnet" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Entertrainmnet</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 "
            onClick={() => setActive("entertrainmnet")}
          >
            Entertrainmnet
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSectionOfExplore;
