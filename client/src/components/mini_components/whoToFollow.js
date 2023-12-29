import React from "react";
import { useUserContextProvider } from "../context/userContext";

const WhoToFollow = () => {
  const { state } = useUserContextProvider();
  const user = state.user.slice(0, 3);
  return (
    <div className="bg-gray-100 rounded-xl w-[100%]">
      <h4 className="font-bold text-xl mb-2 p-3">Who to follow</h4>
      {user.map((user,index) => {
        return (
          <div className="flex items-center justify-between mb-2 hover:bg-gray-200 p-2" key={index}>
            <div className="flex items-center gap-2">
              <div className="w-[45px] h-[40px] contain border rounded-full overflow-hidden">
                <img src={user.image} alt="" className="bg-white" />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-sm hover:underline">
                  {user.firstName}
                </span>
                <span className="text-sm">@{user.username}</span>
              </div>
            </div>
            <div className="text-2xl">
              <button className="text-sm font-bold py-2 px-4 rounded-3xl bg-black text-white hover:opacity-80">
                Follow
              </button>
            </div>
          </div>
        );
      })}
      <a href="/explore" className="ml-3 text-blue-400">
        Show more
      </a>
    </div>
  );
};

export default WhoToFollow;
