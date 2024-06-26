import React from 'react'
import Modal from '../Card/modalCont'
import cancelIcon from '../../Assets/Images/cancelIcon.svg'
import Select from '../Input/select'
import CustomInput from '../Input/custom.jsx'
import Code from '../../Assets/Images/Code.png'
import Naira from '../../Assets/Images/Naira.png'
import CustomizedSwitches from '../Input/switch.jsx'
import CustomTextField from '../Input/input.jsx'

const Airtime = ({closeIcon}) => {
  const selectProviders = [
    {
      value: "USD",
      label: "Airtel",
    },
    {
      value: "EUR",
      label: "MTN",
    },
    {
      value: "BTC",
      label: "Glo",
    },
    {
      value: "JPY",
      label: "9mobile",
    },
  ];
  const selectMethod = [
      {
        value: "Wallet",
        label: "Wallet",
      },
      {
        value: "Card",
        label: "Card",
      },
  ]
  return (
    <Modal cancelbtn={cancelIcon}  text='pay' title='Buy Airtime' hide='hide' handleClose={closeIcon}>
      <Select selectProviders={selectProviders} selectText='Select network provider' width='100%'/>
      <CustomInput type='Phone number' image={Code} />
      <CustomInput type='Amount' image={Naira} />
      <Select selectProviders={selectMethod} marginTop='10px' selectText='Payment Method' width='100%' />
      <div className='w-full my-[10px] p-2 flex justify-between items-center'>
        <p>
          Add to Beneficiary
        </p>
        <CustomizedSwitches />
      </div>
      <CustomTextField type='text' label='Enter beneficiary name' />
    </Modal>
  )
}

export default Airtime
