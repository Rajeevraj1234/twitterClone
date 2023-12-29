import React, { useState } from "react";
import axios from "axios";

const ProfileEditSection = ({ user }) => {
  const [form, setForm] = useState({
    fullname: user?.fullname,
    username: user?.username,
    dob: user?.dob,
    about: user?.about,
    locaton: user?.locaton,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onProfileChange = (e) => {
    console.log(e.target.files[0]);
    setForm({ ...form, profileImage: e.target.files[0]});
  };
  const onCoverChange = (e) => {
    setForm({ ...form, coverImage: e.target.files[0]});
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    await axios.post(
      `http://localhost:8000/user/updateUser/${user?._id}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <div className="">
      <h1 className="text-4xl text-center my-10 ">Edit Profile</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Full Name
          </label>
          <div className="mt-2">
            <input
              defaultValue={user?.fullname}
              onChange={handleChange}
              id="fullname"
              name="fullname"
              type="fullname"
              className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 value:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              defaultValue={user?.username}
              onChange={handleChange}
              id="username"
              name="username"
              type="username"
              className="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 value:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="dob"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date Of Birth
            </label>
            <div className="text-sm">
              <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                eg: 00 APRIL 2000
              </span>
            </div>
          </div>
          <div className="mt-2">
            <input
              defaultValue={user?.dob}
              onChange={handleChange}
              id="dob"
              name="dob"
              type="dob"
              className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 value:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
          </div>
          <div className="mt-2">
            <input
              defaultValue={user?.about}
              onChange={handleChange}
              id="about"
              name="about"
              type="about"
              className="block ps-2 w-[100%] overflow-x-scroll rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 value:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="profileImage"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Profile Image
          </label>
          <div className="mt-2">
            <input
              onChange={onProfileChange}
              id="profileImage"
              name="profileImage"
              type="file"
              className="border border-gray-200 "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="coverImage"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cover Image
          </label>
          <div className="mt-2">
            <input
              onChange={onCoverChange}
              id="coverImage"
              name="coverImage"
              type="file"
              className="border border-gray-200 "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="locaton"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Locaton
          </label>
          <div className="mt-2">
            <input
              defaultValue={user?.locaton}
              onChange={handleChange}
              id="locaton"
              name="locaton"
              type="locaton"
              className="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 value:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditSection;
