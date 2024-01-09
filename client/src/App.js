import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/homePage";
import Explore from "./components/Pages/explore";
import Notification from "./components/Pages/notification";
import Message from "./components/Pages/message";
import Lists from "./components/Pages/lists";
import Bookmarks from "./components/Pages/bookmarks";
import Communities from "./components/Pages/communities";
import Profile from "./components/Pages/profile";
import OtherProfile from "./components/Pages/otherProfile";
import Login from "./components/Pages/login";
import Signup from "./components/Pages/signup";
import Reply from "./components/Pages/reply";
import { useUserLoginContextProvider } from "../src/components/context/userLoginContext";

function App() {
  const { userLogin } = useUserLoginContextProvider();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userLogin ? <MainPage /> : <Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/message" element={<Message />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/otherprofile/:username" element={<OtherProfile />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reply/:id" element={<Reply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
