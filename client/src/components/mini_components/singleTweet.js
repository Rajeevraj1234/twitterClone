import React, { useState, useEffect } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineMessage, AiOutlineRetweet } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { BsBookmark, BsUpload } from "react-icons/bs";
import axios from "axios";
import { useUserLoginContextProvider } from "../context/userLoginContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleTweet = ({user}) => {
  const { userLogin } = useUserLoginContextProvider();
  const { id } = useParams();
  const [tweet, setTweet] = useState();
  const [like, setLike] = useState("");
  const [activeIndex, setActiveIndex] = useState(false);
  const [deleteResponse, setDeleteResponse] = useState(null);
  useEffect(() => {
    const handleTweet = async () => {
      const response = await axios.get(
        `http://localhost:8000/post/reply/${id}`,
        {
          withCredentials: true,
        }
      );

      setTweet(response.data);
    };
    handleTweet();
  }, [like, deleteResponse]);

  const handleLike = async (tweetID, userID) => {
    const response = await axios.post("http://localhost:8000/post/like", {
      userID: userID,
      tweetID,
    });
    setLike(response.data);
  };

  const handleOnCick = (index) => {
    setActiveIndex(true);
  };

  const handleDelete = async (tweetID, userID) => {
    const response = await axios.post("http://localhost:8000/post/delete", {
      tweetID: tweetID,
      userID: userID,
    });
    setDeleteResponse(response.data.msg);
  };

  return (
    <div className="flex-col p-3 w-[100%]">
      <div className="flex items-center p-3 w-[100%]">
        <div className="mr-4 flex items-start w-[8%]">
          <img
            src={`http://localhost:8000/${tweet?.createdBy?.profileImage}`}
            alt=""
            className="w-[40px] h-[40px] contain border rounded-full overflow-hidden"
          />
        </div>
        <div className="text-sm">
          <span className="font-bold text-lg">
            <NavLink to={`/otherprofile/${tweet?.createdBy?.username}`}>
              {tweet?.createdBy?.fullname}
            </NavLink>
          </span>{" "}
          <br />
          <span>
            @{tweet?.createdBy?.username} · {tweet?.createdAt}{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[92%]">
        <div className="flex justify-between items-start w-full">
          <div>
            <div className="text-sm font-medium">
              {tweet?.tweet}

              {tweet?.content && (
                <div>
                  {tweet?.content.includes(".mp4") ? (
                    <div>
                      <video width="320" height="240" controls>
                        <source
                          src={`http://localhost:8000/${tweet?.content}`}
                          type="video/mp4"
                        ></source>
                      </video>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={`http://localhost:8000/${tweet?.content}`}
                        className="max-w-[90%] my-3 rounded-xl max-h-[500px] overflow-hidden"
                        alt="Loading..."
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
            <div className="relative" onClick={() => handleOnCick()}>
              <FiMoreHorizontal />
              {activeIndex && (
                <span className="absolute inset-0 left-0 translate-x-[-100%] border bg-white rounded-xl h-[44px] w-[200px]  shadow-xl">
                  {userLogin?._id === tweet?.createdBy?._id ? (
                    <ul className="hover:bg-gray-200 p-2 rounded-lg">
                      <li
                        onClick={() =>
                          handleDelete(tweet?._id, tweet?.createdBy)
                        }
                        className="flex gap-1 items-center text-red-500 text-lg font-bold"
                      >
                        <RiDeleteBin6Line />
                        Delete
                      </li>
                    </ul>
                  ) : (
                    <ul className="hover:bg-gray-200 p-2 rounded-lg">
                      <li className="flex gap-1 items-center text-lg font-bold">
                        <SlUserFollowing />
                        Follow
                      </li>
                    </ul>
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between text-lg w-full mr-2">
            <span className="flex items-center">
              <span className="hover:bg-blue-100 rounded-full p-2 ">
                {" "}
                <AiOutlineMessage />
              </span>
              <span className="text-[12px]">{tweet?.reply?.length}</span>
            </span>
            <span className="flex items-center">
              <span className="hover:bg-green-100 rounded-full p-2 ">
                {" "}
                <AiOutlineRetweet />
              </span>
              <span className="text-[12px]">{tweet?.retweet}</span>
            </span>
            <span className="flex items-center">
              <span
                onClick={() => handleLike(tweet?._id, userLogin?._id)}
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
};

export default SingleTweet;
