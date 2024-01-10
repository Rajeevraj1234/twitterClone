import React, { useState } from "react";
import { BsChevronDown, BsEmojiSmile, BsCalendar4Range } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { AiOutlineGif } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import axios from "axios";
import { useUserLoginContextProvider } from "../context/userLoginContext";

// https://i.pinimg.com/originals/ba/6e/49/ba6e49004292b214acd59d32a8ec8806.gif

const Post = ({ id }) => {
  const [active, setActive] = useState(false);
  const [everyone, setEveryone] = useState(false);
  const [pub, setPub] = useState("Everyone");
  const { userLogin } = useUserLoginContextProvider();

  const [postInput, setText] = useState("");
  const [content, setContent] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setContent(file);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      if (id) {
        
        const formData = new FormData();
        formData.append("postInput", postInput);
        formData.append("userId", userLogin?._id);
        formData.append("tweetContent", content);
        formData.append("pointedTo", id);

        const response = await axios.post(
          "http://localhost:8000/post/tweet",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
      } else {
        const formData = new FormData();
        formData.append("postInput", postInput);
        formData.append("userId", userLogin?._id);
        formData.append("tweetContent", content);

        const response = await axios.post(
          "http://localhost:8000/post/tweet",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response Error:", error.response.data);
        console.error("Response Status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("General Error:", error.message);
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      onFocus={() => setActive(true)}
      onBlur={() => setEveryone(false)}
      className="flex  p-5 border border-gray-200 w-full select-none "
    >
      <div className="w-[9%] m-3 ml-[-4px]">
        <img
          src={`http://localhost:8000/${userLogin?.profileImage}`}
          alt=""
          className="w-[40px] h-[40px] contain border rounded-full overflow-hidden"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-[88%]">
        {active && (
          <span
            onClick={() => {
              setEveryone(!everyone);
            }}
            className="flex relative items-center gap-2 text-blue-400 font-bold border text-sm border-blue-500 p-[3px] px-[7px] rounded-3xl mb-4"
          >
            {pub} <BsChevronDown />
            {everyone && (
              <span className="w-[300px] h-[180px] bg-white absolute inset-0 top-[150%] left-[-80%] rounded-3xl p-4 text-black shadow-xl border">
                <div className="font-bold h-[33%] items-center text-2xl">
                  Choose audience{" "}
                </div>
                <div
                  onClick={() => setPub("Everyone")}
                  className="flex gap-4 items-center font-semibold h-[33%] text-xl hover:bg-gray-100 p-1 rounded-3xl "
                >
                  <span className="bg-blue-400 rounded-full p-2 text-white">
                    <FaGlobeAmericas />
                  </span>
                  <span>Everyone</span>
                </div>
                <div
                  onClick={() => setPub("Circle")}
                  className="flex gap-4 items-center font-semibold h-[33%] text-xl hover:bg-gray-100 p-1 rounded-3xl "
                >
                  <span className="bg-green-400 rounded-full p-2 text-white">
                    <MdPeopleAlt />
                  </span>
                  <span>Circle</span>
                </div>
              </span>
            )}
          </span>
        )}

        <form onSubmit={handleSubmit}>
          <textarea
            name="postInput"
            placeholder="What is hapenning?!"
            onChange={handleChange}
            style={{ height: `${postInput.split("\n").length * 1.5}em` }}
            className="p-3 no-scrollbar  text-md min-h-[50px] max-h-[500px] w-[500px] placeholder:text-lg placeholder:text-gray-500 resize-none outline-none overflow-y-auto "
          ></textarea>
          {active && (
            <span className="flex items-center gap-2 tracking-tighter font-bold text-blue-400 text-sm my-2">
              <FaGlobeAmericas />
              Everyone can reply
            </span>
          )}
          {active && <hr className="w-[100%] my-3" />}
          <div className="flex justify-between w-[90%] items-center text-lg text-blue-600 font-bold">
            <div className="flex gap-1">
              <span className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
                <label htmlFor="tweetImage">
                  <FiImage />
                </label>

                <input
                  type="file"
                  id="tweetImage"
                  name="tweetImage"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </span>
              <span className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
                <AiOutlineGif />
              </span>
              <span className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2 hidden md:block ">
                <LuListTodo />
              </span>
              <span className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
                <BsEmojiSmile />
              </span>
              <span className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2 hidden md:block">
                <BsCalendar4Range />
              </span>
              <span className="hover:bg-blue-50 transition duration-75 ease-linear rounded-full p-2">
                <CiLocationOn />
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-400 text-white font-bold text-sm px-5 py-2 rounded-3xl hover:bg-blue-500"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
