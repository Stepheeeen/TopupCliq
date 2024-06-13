import React from 'react'
import { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Beneficiaries from '../../Assets/Images/Beneficiaries'
import Dashboard from '../../Assets/Images/Dashboard'
import Transaction from '../../Assets/Images/Transaction'
import Profile from '../../Assets/Images/Profile'
import Logout from '../../Assets/Images/Logout'

const DashboardStructure = ({children}) => {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const pages = [
    {pagename: 'Dashboard', icon: <Dashboard/> , navpage: 'signup', active: 'true', hover: 'secondary'},
    {pagename: 'Transactions', icon: <Transaction/> , navpage: '/', hover: 'secondary'},
    {pagename: 'Beneficiaries', icon: <Beneficiaries/> , navpage: '/', hover: 'secondary'},
    {pagename: 'Settings', icon: <Profile/> , navpage: '/', hover: 'secondary'},
    {pagename: 'Logout', icon: <Logout/> , navpage: '/', color: 'red', hover: 'custom-red'},
  ]
  return (
    <section>
      <Sidebar pages={pages} isLoggedIn={isLoggedIn}/>
      <Navbar />
      <div>
        {children}
      </div>
    </section>
  )
}

export default DashboardStructure