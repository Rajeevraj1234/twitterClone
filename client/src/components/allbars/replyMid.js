import React from "react";
import SingleTweet from "../mini_components/singleTweet";
import Post from "../mini_components/post";
import { FaArrowLeft } from "react-icons/fa6";

const ReplyMid = ({user}) => {
  return (
    <div>
      <div className="text-lg font-bold">
        <h1 className="flex gap-5 items-center ml-2">
          <FaArrowLeft />
          POST
        </h1>
      </div>
      <SingleTweet user={user} />
      <div className="w-[100%">
        <Post />
      </div>
    </div>
  );
};

export default ReplyMid;
