import React from 'react'
import Modal from '../Card/modalCont'
import cancelIcon from '../../Assets/Images/cancelIcon.svg'
import Select from '../Input/select'
import CustomInput from '../Input/custom.jsx'
import Code from '../../Assets/Images/Code.png'
// import Naira from '../../Assets/Images/Naira.png'
import CustomizedSwitches from '../Input/switch.jsx'


const Data = ({closeIcon}) => {
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
  const selectPlan = [
    {
      value: "USD",
      label: "Airtel plan",
    },
    {
      value: "EUR",
      label: "MTN plan",
    },
    {
      value: "BTC",
      label: "Glo plan",
    },
    {
      value: "JPY",
      label: "9mobile plan",
    },
  ];
  return (
    <Modal cancelbtn={cancelIcon}  text='pay' title='Buy Data' hide='hide' handleClose={closeIcon}>
      <Select selectProviders={selectProviders} selectText='Select network provider' width='100%' />
      <br />
      <Select selectProviders={selectPlan} selectText='Select plan' width='100%' />
      <CustomInput type='Phone number' image={Code} placeholder='Phone number' />
      {/* <CustomInput type='Amount' image={Naira} placeholder='Amount' /> */}
      <Select selectProviders={selectMethod} marginTop='10px' selectText='Payment Method' width='100%'  />
      <div className='w-full my-[10px] p-2 flex justify-between items-center'>
        <p>
          Add to Beneficiary
        </p>
        <CustomizedSwitches />
      </div>
    </Modal>
  )
}

export default Data
