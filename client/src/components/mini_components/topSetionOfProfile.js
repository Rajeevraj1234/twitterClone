import React, { useState,useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { CiLocationOn, CiLink, CiCalendarDate } from "react-icons/ci";
import AllTweets from "../mini_components/tweets";
import ProfileEditSection from "../mini_components/profileEditSection";
import { useUserLoginContextProvider } from "../context/userLoginContext";
import axios from "axios"

const TopSetionOfProfile = ({ user }) => {
  const { userLogin } = useUserLoginContextProvider();
  const [active, setActive] = useState("posts");
  const [editSection, setEditSection] = useState(false);
  const [isFollowing,setIsFollowing] = useState(null);

  
  useEffect(() => {
    // Perform the check when user or userLogin changes
    if (user && userLogin && user.followers.includes(userLogin._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [user, userLogin]);
  
  
  

  const handleFollowUser = async() =>{
    const data = {
      loginUserId:userLogin?._id,
      followUserId:user?._id,
    }
    const response = await axios.post("http://localhost:8000/user/followUser",data)
    setIsFollowing(response.data.isFollowing);
  }
  const handleUnfollowUser = async() =>{
    const data = {
      loginUserId:userLogin?._id,
      followUserId:user?._id,
    }
    const response = await axios.post("http://localhost:8000/user/unfollowUser",data)
    setIsFollowing(response.data.isFollowing);
  }

  return (
    <div className="select-none">
      {editSection && (
        <div
          onClick={() => setEditSection(false)}
          className="absolute w-[110%] h-[110%] left-0 z-2 bg-black opacity-50 text-right z-2 "
        ></div>
      )}
      <div className="flex items-center gap-8 ps-2 relative">
        <span>
          <FaArrowLeft />
        </span>
        <div className="flex flex-col gap-0">
          <span className="font-bold text-xl">{user?.fullname}</span>
          <span className="text-[12px]">{user?.posts?.length} posts</span>
        </div>
      </div>
      <div className="mt-4">
        <img
          className="h-[300px] w-full"
          src={`http://localhost:8000/${user?.coverImage}`}
          alt="Cover  profile"
        />
      </div>
      <div className="flex justify-between items-start mb-5">
        <img
          className="w-[150px] h-[150px] ms-5 rounded-full mt-[-50px]"
          src={`http://localhost:8000/${user?.profileImage}`}
          alt="profile"
        />
        {userLogin?.username === user?.username ? (
          <span
            onClick={() => setEditSection(true)}
            className="me-5 mt-2 text-sm border-2 border-gray px-4 py-2 font-bold rounded-3xl cursor-pointer  "
          >
            Edit Profile
            {editSection && (
              <span className="absolute no-scrollbar pb-2 inset-0 top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 border-2 bg-white w-[30rem] h-[30%] px-16 rounded-xl overflow-y-scroll ">
                <ProfileEditSection user={user} />
              </span>
            )}
          </span>
        ) : (
          isFollowing ? (
            <span
            onClick={handleUnfollowUser}
            className="me-5 mt-2 text-sm border-2 border-gray px-4 py-2 font-bold rounded-3xl cursor-pointer bg-black text-white"
          >
            Unfollow
            {editSection && ( 
              <span className="absolute no-scrollbar pb-2 inset-0 top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 border-2 bg-white w-[30rem] h-[30%] px-16 rounded-xl overflow-y-scroll ">
                <ProfileEditSection user={user} />
              </span>
            )}
          </span>
          ):(
            <span
            onClick={handleFollowUser}
            className="me-5 mt-2 text-sm border-2 border-gray px-4 py-2 font-bold rounded-3xl cursor-pointer bg-black text-white"
          >
            Follow
            {editSection && ( 
              <span className="absolute no-scrollbar pb-2 inset-0 top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 border-2 bg-white w-[30rem] h-[30%] px-16 rounded-xl overflow-y-scroll ">
                <ProfileEditSection user={user} />
              </span>
            )}
          </span>
          )
        )}
      </div>

      <div className="flex flex-col mb-3">
        <span className="font-bold text-xl ml-3">{user?.fullname}</span>
        <span className="text-sm ml-3">{user?.username}</span>
      </div>
      <div className="ml-3 text-sm font-medium">
        <p>{user?.about}</p>
      </div>
      <div className="flex gap-3 ml-3 mt-2 font-medium ">
        <span className="flex gap-1 items-center">
          {" "}
          <CiLocationOn /> {user?.locaton}
        </span>

        {user?.location && (
          <span className="flex gap-1 items-center">
            {" "}
            <CiLink />
            example.com
          </span>
        )}
        <span className="flex gap-1 items-center">
          <CiCalendarDate />
          {user?.dob}
        </span>
      </div>
      <div className="ml-3 mt-3 text-sm flex gap-4">
        <span>
          <span className="font-bold">{user?.following.length}</span> following
        </span>
        <span>
          <span className="font-bold">{user?.followers.length}</span> followers
        </span>
      </div>
      <div className="flex w-[100%]  font-semibold text-md mt-3 text-md ">
        {active === "posts" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Posts</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400"
            onClick={() => setActive("posts")}
          >
            Posts
          </div>
        )}
        {active === "Replies" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Replies</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400"
            onClick={() => setActive("Replies")}
          >
            Replies
          </div>
        )}
        {userLogin?.username === user?.username &&
          (active === "Highlights" ? (
            <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
              <span className="border-b-4 border-blue-500 pb-3">
                Highlights
              </span>
            </div>
          ) : (
            <div
              className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400 "
              onClick={() => setActive("Highlights")}
            >
              Highlights
            </div>
          ))}
        {active === "Media" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Media</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400 "
            onClick={() => setActive("Media")}
          >
            Media
          </div>
        )}
        {active === "Likes" ? (
          <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
            <span className="border-b-4 border-blue-500 pb-3">Likes</span>
          </div>
        ) : (
          <div
            className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400 "
            onClick={() => setActive("Likes")}
          >
            Likes
          </div>
        )}
      </div>
      <AllTweets userID={user?._id} />
    </div>
  );
};

export default TopSetionOfProfile;
