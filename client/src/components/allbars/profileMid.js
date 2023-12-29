import React from 'react'
import TopSetionOfProfile from  "../mini_components/topSetionOfProfile"

const ProfileMid = ({user}) => {
  return (
    <div className='relative overflow-hidden  '>
        <TopSetionOfProfile user={user} />
    </div>
  )
}

export default ProfileMid