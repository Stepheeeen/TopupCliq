import React from 'react'
import { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import DashboardIcon from '../../Assets/Images/Dashboard.svg'
import TransactionIcon from '../../Assets/Images/Transaction.svg'
import BeneficiariesIcon from '../../Assets/Images/Beneficiaries.svg'
import ProfileIcon from '../../Assets/Images/Profile.svg'
import LogoutIcon from '../../Assets/Images/Logout.svg'

const DashboardStructure = ({children}) => {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const pages = [
    {pagename: 'Dashboard', icon: DashboardIcon , navpage: 'signup', active: 'true'},
    {pagename: 'Transactions', icon: TransactionIcon , navpage: '/',},
    {pagename: 'Beneficiaries', icon: BeneficiariesIcon , navpage: '/',},
    {pagename: 'Settings', icon: ProfileIcon , navpage: '/',},
    {pagename: 'Logout', icon: LogoutIcon , navpage: '/', color: 'red',},
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