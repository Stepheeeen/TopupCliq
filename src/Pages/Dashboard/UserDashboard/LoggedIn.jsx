import React from 'react'
import DashboardStructure from '..'
import { BalanceCard} from '../../../Components/Card/card'
import QuickAction from '../../../Components/Card/QuickAction'
import TransactionCard from '../../../Components/Card/TransactionCard'


const LoggedIn = () => {
  return (
    <DashboardStructure bool={true}>
      <BalanceCard />

      <div className='flex w-full items-center mt-5 gap-6'>
        <QuickAction />

        <TransactionCard />
      </div>
    </DashboardStructure>
  )
}

export default LoggedIn