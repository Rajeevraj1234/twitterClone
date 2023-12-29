import React, { useState, useEffect } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineMessage, AiOutlineRetweet } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { BsBookmark, BsUpload } from "react-icons/bs";
import axios from "axios";
import { useUserLoginContextProvider } from "../context/userLoginContext";

const Tweets = ({ userID }) => {
  const { userLogin } = useUserLoginContextProvider();
  const [TweetData, setTweetData] = useState([]);
  const [like, setLike] = useState("");

  useEffect(() => {
    if (!userID) {
      const handleTweet = async () => {
        const response = await axios.get(
          "http://localhost:8000/post/getTweet",
          {
            withCredentials: true,
          }
        );
        setTweetData(response.data.allTweets);
      };
      handleTweet();
    } else {
      const handleTweet = async () => {
        const response = await axios.get(
          `http://localhost:8000/post/userTweet/${userID}`,
          {
            withCredentials: true,
          }
        );

        setTweetData(response.data.allTweet);
      };
      handleTweet();
    }
  }, [like]);

  const handleLike = async (tweetID, userID) => {
    const response = await axios.post("http://localhost:8000/post/like", {
      userID: userLogin?._id,
      tweetID,
    });
    setLike(response.data);
  };

  return (
    <div className="w-full ">
      {TweetData &&
        TweetData.map((tweet) => {
          return (
            <div className="border flex p-3 w-[100%]" key={tweet._id}>
              <div className="mr-4 flex items-start mt-3 w-[8%]">
                <img
                src={`http://localhost:8000/${tweet?.createdBy?.profileImage}`}
                  alt=""
                  className="w-[40px] h-[40px] contain border rounded-full overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-3 w-[92%]">
                <div className="flex justify-between items-start w-full">
                  <div>
                    <div className="text-sm">
                      {" "}
                      <span className="font-bold text-lg">
                        {tweet?.createdBy?.fullname}
                      </span>{" "}
                      @{tweet.createdBy?.username} · {tweet.createdAt}{" "}
                    </div>
                    <div className="text-sm font-medium">
                      {tweet.tweet}

                      {tweet.image && (
                        <img
                          src={`http://localhost:8000/${tweet?.image}`}
                          className="max-w-[90%] my-3 rounded-xl max-h-[500px] overflow-hidden"
                          alt="Loading..."
                        ></img>
                      )}
                    </div>
                  </div>
                  <div className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between text-lg w-full mr-2">
                    <span className="flex items-center">
                      <span className="hover:bg-blue-100 rounded-full p-2 ">
                        {" "}
                        <AiOutlineMessage />
                      </span>
                      <span className="text-[12px]">{tweet.reply}</span>
                    </span>
                    <span className="flex items-center">
                      <span className="hover:bg-green-100 rounded-full p-2 ">
                        {" "}
                        <AiOutlineRetweet />
                      </span>
                      <span className="text-[12px]">{tweet.retweet}</span>
                    </span>
                    <span className="flex items-center">
                      <span
                        onClick={() => handleLike(tweet._id, userLogin?._id)}
                        className="hover:bg-red-100 rounded-full p-2 "
                      >
                        {" "}
                        {tweet?.likes?.includes(userLogin?._id) ? (
                          <RiHeart3Fill className="text-red-500" />
                        ) : (
                          <RiHeart3Line />
                        )}
                      </span>
                      <span className="text-[12px]">{tweet?.likes?.length}</span>
                    </span>
                    <span className="flex items-center">
                      <span className="hover:bg-blue-100 rounded-full p-2 ">
                        {" "}
                        <BiBarChart />
                      </span>
                      <span className="text-[12px]">{tweet?.view}</span>
                    </span>
                    <span className="flex items-center">
                      <span className="hover:bg-blue-100 rounded-full p-2 ">
                        {" "}
                        <BsBookmark />
                      </span>
                      <span className="text-[12px]">{tweet?.bookmark}</span>
                    </span>
                  </div>
                  <div className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
                    <BsUpload />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tweets;
