import React from "react";
import data from "../Data/right_trending_data";
import { FiMoreHorizontal } from "react-icons/fi";

const TrendingPage = () => {
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div
            className="flex justify-between items-center mb-5 hover:bg-gray-200 px-3 py-2"
            key={index}
          >
            <div className="flex flex-col">
              <span className="text-[13px]">{data.head}</span>
              <span className="font-bold text-md">{data.desc}</span>
              <span className="text-[12px]">{data.posts}</span>
            </div>
            <div className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
              <FiMoreHorizontal />
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default TrendingPage;
