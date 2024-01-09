import React, { useEffect, useState } from "react";
import LeftSidebar from "../allbars/l_sidebar";
import RightSidebar from "../allbars/r_sidebar";
import MidPage from "../allbars/replyMid";
import { useUserLoginContextProvider } from "../context/userLoginContext";
import Login from "../Pages/login";
import axios from "axios";
import { useParams } from "react-router-dom";

const Reply = () => {
    const { userLogin } = useUserLoginContextProvider();
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    async function handleUserProfile() {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/profile/${username}`, //fetching detail of person who has posted the tweet original owner  
          {
            withCredentials: true,
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      }
    }
    handleUserProfile();
  }, [username]);
  return (
    <>
      {userLogin ? (
        <div className="flex justify-center w-[100vw] h-[100vh] xl:px-[10%] 2xl:px-[18%] md:px-[6%] sm:px-[2%] px-[0%]">
          <div className="xl:w-[27%] sm:w-[10%] hidden sm:block ">
            {" "}
            {userLogin?.username === username ?(<LeftSidebar pageName={"profile"} />):(<LeftSidebar pageName={""} />)}
          </div>
          <div className="border border-gray sm:w-[85%] md:w-[75%] xl:w-[70%] lg:w-[55%]  overflow-scroll no-scrollbar">
            <MidPage user={userData} />
          </div>
          <div className="xl:w-[47%] lg:w-[40%] hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Reply