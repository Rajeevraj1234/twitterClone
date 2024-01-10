import React from "react";
import SingleTweet from "../mini_components/singleTweet";
import ReplyAllTweet from "../mini_components/replyAllTweet";
import Post from "../mini_components/post";
import { FaArrowLeft } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ReplyMid = ({ user }) => {
  const { id } = useParams();
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
        <Post id={id} />
      </div>
      <div>
        <ReplyAllTweet id={id}  />
      </div>
    </div>
  );
};

export default ReplyMid;
