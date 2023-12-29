import React, { useEffect, useState } from "react";
import LeftSidebar from "../allbars/l_sidebar";
import RightSidebar from "../allbars/r_sidebar";
import MidPage from "../allbars/profileMid";
import { useUserLoginContextProvider } from "../context/userLoginContext";
import Login from "../Pages/login";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userLogin } = useUserLoginContextProvider();
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function handleUserProfile() {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/profile/${id}`,
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
  }, [id]);

  return (
    <>
      {userLogin ? (
        <div className="flex justify-center w-[100vw] h-[100vh] px-[15%]">
          <div className="w-[22%]  ">
            {" "}
            <LeftSidebar pageName={"profile"} />
          </div>
          <div className="border border-gray w-[57%] overflow-scroll no-scrollbar">
            <MidPage user={userData}/>
          </div>
          <div className="w-[37%] ">
            <RightSidebar />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Profile;
