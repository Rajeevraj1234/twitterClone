import React from 'react'
import TopSetionOfProfile from  "../mini_components/topSetionOfProfile"
import SmartNavbar from "../mini_components/smartphoneNavbar"

const ProfileMid = ({user}) => {
  return (
    <div className='relative overflow-hidden  '>
        <TopSetionOfProfile user={user} />
        <div>
        <SmartNavbar pageName={"profile"}/>
      </div>
    </div>
  )
}

export default ProfileMid