import React from 'react'
import Select from '../Input/select'
import Naira from '../../Assets/Images/Naira.png'
import Modal from '../Card/modalCont'
import CustomInput from '../Input/custom.jsx'
import CustomTextField from '../Input/input.jsx'
import CustomizedSwitches from '../Input/switch.jsx'
import cancelIcon from '../../Assets/Images/cancelIcon.svg'

const Electricity = ({ closeIcon }) => {
  const selectBillers = [
    {
      value: "USD",
      label: "IKEDC",
    },
    {
      value: "EUR",
      label: "Gotv",
    },
    {
      value: "BTC",
      label: "Startimes",
    },
    {
      value: "JPY",
      label: "Strong",
    },
  ];
  const selectPlan = [
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
    <Modal cancelbtn={cancelIcon} text='pay' title='Electricity Payment' hide='hide' handleClose={closeIcon}>
      <Select selectProviders={selectBillers} selectText='Select biller' />
      <Select selectProviders={selectPlan} selectText='Select plan' marginTop='18px' marginBottom='18px' />
      <CustomTextField type='text' label='Meter number' />
      <CustomInput type='Amount' image={Naira} placeholder='Amount' />
      <Select selectProviders={selectMethod} marginTop='10px' selectText='Payment Method' />
      <div className='w-full my-[10px] p-2 flex justify-between items-center'>
        <p>
          Add to Beneficiary
        </p>
        <CustomizedSwitches />
      </div>
    </Modal>
  )
}

export default Electricity
