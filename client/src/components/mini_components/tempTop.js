import React, {useState} from 'react'
import { RiSettings3Line } from "react-icons/ri";


const TempTop = () => {
    const [active, setActive] = useState("forYou");

    return (
      <div className="sticky top-0 z-10 backdrop-blur-2xl bg-white/30">
        <div className="w-full m-3 flex justify-between items-center ps-3">
          <span className="font-semibold text-2xl">Building...</span>
           <span className='text-2xl'><RiSettings3Line /></span>
        </div>
        <div className="flex w-[100%]  font-semibold text-md ">
          {active === "all" ? (
            <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
              <span className="border-b-4 border-blue-500 pb-3">All</span>
            </div>
          ) : (
            <div
              className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400"
              onClick={() => setActive("all")}
            >
              All
            </div>
          )}
          {active === "verified" ? (
            <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
              <span className="border-b-4 border-blue-500 pb-3">Verified</span>
            </div>
          ) : (
            <div
              className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400 "
              onClick={() => setActive("verified")}
            >
              Verified
            </div>
          )}
          {active === "mentions" ? (
            <div className="w-1/2 text-center p-3 hover:bg-gray-200 ">
              <span className="border-b-4 border-blue-500 pb-3">Mentions</span>
            </div>
          ) : (
            <div
              className="w-1/2 text-center p-3 hover:bg-gray-200 text-gray-400"
              onClick={() => setActive("mentions")}
            >
              Mentions
            </div>
          )}
        </div>
      </div>
    );
}

export default TempTop