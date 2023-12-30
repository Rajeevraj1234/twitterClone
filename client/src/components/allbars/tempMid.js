import React from 'react'
import Temptop from "../mini_components/tempTop";
import SmartNavbar from "../mini_components/smartphoneNavbar";


const TempMid = () => {
    return (
        <div className="w-[95%] h-full select-none">
          <Temptop />
          <div>
          <SmartNavbar pageName={"message"}/>
        </div>
        </div>
      );
}

export default TempMid