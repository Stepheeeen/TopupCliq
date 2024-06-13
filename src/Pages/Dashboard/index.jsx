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
    {pagename: 'Dashboard', icon: <Dashboard/> , navpage: ' Dashboard', active: 'true',},
    {pagename: 'Transactions', icon: <Transaction/> , navpage: '  Transactions',},
    {pagename: 'Beneficiaries', icon: <Beneficiaries/> , navpage: ' Beneficiaries',},
    {pagename: 'Settings', icon: <Profile/> , navpage: '  Settings',},
    {pagename: 'Logout', icon: <Logout/> , navpage: ' Logout', color: 'red',},
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