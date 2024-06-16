import React from 'react'
import NotificationIcon from '../../Assets/Images/notification.svg'
import Profile from '../../Assets/Images/Profile'

const Navbar = ({pagename}) => {
  return (
    <nav className=' w-[80%] fixed top-0 left-[20%] p-5 h-[90px] shadow-sm flex justify-between items-center bg-white z-10'>
      <h1 className='font-[500] text-xl'>
      {pagename}
      </h1>

      <div className='flex justify-center w-[20%] items-center mr-[20px]'>
      <img src={NotificationIcon} alt="notification" className='mr-[50px]'/>

      <div className='flex items-center'>
        <Profile/>

        <h1 className="mx-3 text-custom-black font-[600] text-[18px]">
          Username
        </h1>
      </div>
      </div>
    </nav>
  )
}

export default Navbar