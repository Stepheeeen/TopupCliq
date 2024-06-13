import React from 'react'
import { useState } from 'react';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Beneficiaries from '../../Assets/Images/Beneficiaries'
import Dashboard from '../../Assets/Images/Dashboard'
import Transaction from '../../Assets/Images/Transaction'
import Profile from '../../Assets/Images/Profile'
import Logout from '../../Assets/Images/Logout'

const DashboardStructure = ({children, bool}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(bool);

  const pages = [
    {pagename: 'Dashboard', icon: <Dashboard/> , navpage: 'signup', active: 'true',},
    {pagename: 'Transactions', icon: <Transaction/> , navpage: '/',},
    {pagename: 'Beneficiaries', icon: <Beneficiaries/> , navpage: '/',},
    {pagename: 'Settings', icon: <Profile/> , navpage: '/',},
    {pagename: 'Logout', icon: <Logout/> , navpage: '/', color: 'red',},
  ]
  return (
    <section className='flex'>
      <Sidebar pages={pages} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className='w-[80%]'>
      <Navbar />
      <div>
        {children}
      </div>
      </div>
    </section>
  )
}

export default DashboardStructure