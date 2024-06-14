import React from 'react'
import DashboardStructure from '..'
import { BalanceCard } from '../../../Components/Card/card'
import QuickAction from '../../../Components/Card/QuickAction'


const LoggedIn = () => {
  return (
    <DashboardStructure bool={true}>
      <BalanceCard />

      <div className='flex w-full mt-5'>
        <QuickAction />
      </div>
    </DashboardStructure>
  )
}

export default LoggedIn