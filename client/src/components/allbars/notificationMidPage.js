import React from "react";
import TopSectionNotification from "../mini_components/topSectionOfNotification";
import SmartNavbar from "../mini_components/smartphoneNavbar";

const NotificationMidPage = () => {
  return (
    <div className="w-[95%] h-full select-none">
      <TopSectionNotification />
      <div>
        <SmartNavbar pageName={"notification"} />
      </div>
    </div>
  );
};

export default NotificationMidPage;
