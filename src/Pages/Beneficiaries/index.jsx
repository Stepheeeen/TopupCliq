import React from 'react'
import DashboardStructure from '../Dashboard'
import Select from '../../Components/Input/select'
import { PrimaryBtn } from '../../Components/Button/button'
import BeneficiaryCard from '../../Components/Card/Beneficiary'
import AddIcon from '@mui/icons-material/Add'

const index = () => {
  const Card = [
    {
      title: 'Title',
      name: 'Username',
      details : 'Transaction details',
    },
    {
      title: 'Title',
      name: 'Username',
      details : 'Transaction details',
    },
    {
      title: 'Title',
      name: 'Username',
      details : 'Transaction details',
    },
    {
      title: 'Title',
      name: 'Username',
      details : 'Transaction details',
    },
  ]
  return (
    <DashboardStructure bool={true} pagename="Beneficiaries">
        <div className='flex w-full justify-between items-center p-3 bg-white'>
        <Select selectText='Beneficiary type' width='400px' />
        <PrimaryBtn text='Add beneficiary' variant='contained' size='large' endIcon={<AddIcon />} />
        </div>

        <div className='w-full p-3 grid grid-cols-3 gap-4 mt-6'>
          <BeneficiaryCard Card={Card}/>
        </div>
    </DashboardStructure>
  )
}

export default index