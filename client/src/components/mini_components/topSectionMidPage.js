import React, { useState } from "react";

const TopSectionMidPage = () => {
  const [active, setActive] = useState("forYou");

  return (
    <div className="sticky top-0 z-10 backdrop-blur-2xl bg-white/30">
      <div className="w-full m-3">
        <span className="font-semibold text-2xl">Home</span>
      </div>
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
        {active === "following" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Following</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 "
            onClick={() => setActive("following")}
          >
            Following
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSectionMidPage;
