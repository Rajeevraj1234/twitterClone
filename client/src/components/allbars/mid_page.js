import React from "react";
import Post from "../mini_components/post";
import TopSectionMidPage from "../mini_components/topSectionMidPage";
import AllTweets from "../mini_components/tweets";

const MidPage = () => {
  return (
    <div className="w-full h-full select-none">
      <TopSectionMidPage />
      <Post />
      <AllTweets />
    </div>
  );
};

export default MidPage;
