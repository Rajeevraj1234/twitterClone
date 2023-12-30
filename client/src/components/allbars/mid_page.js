import React from "react";
import Post from "../mini_components/post";
import TopSectionMidPage from "../mini_components/topSectionMidPage";
import AllTweets from "../mini_components/tweets";
import SmartNavbar from "../mini_components/smartphoneNavbar";

const MidPage = () => {
  return (
    <div>
      <div className="w-full h-full select-none">
        <TopSectionMidPage />
        <div className="hidden sm:block">
          <Post />
        </div>
        <AllTweets />
      </div>
      <div>
        <SmartNavbar pageName={"home"}/>
      </div>
    </div>
  );
};

export default MidPage;
