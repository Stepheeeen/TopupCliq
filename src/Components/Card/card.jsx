import React from 'react'
import { useState } from 'react';
import Balance from '../Button/Balance';
import { Link } from 'react-router-dom';
import Send from '../../Assets/Images/send-2.svg'
import Fund from '../../Assets/Images/wallet-add.svg'
import Deposit from '../../Assets/Images/deposit.svg'
import Card from '../../Assets/Images/card.svg'
import cancelIcon from '../../Assets/Images/cancelIcon.svg'
import Naira from '../../Assets/Images/Naira.png'
import CustomInput from '../Input/custom.jsx'
import CustomTextField from '../Input/input.jsx'
import CustomizedSwitches from '../Input/switch.jsx'
import ModalComponent from '../Modal/Pin';
import ModalCont from './modalCont';


const BalanceCard = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [on, setOn] = useState(false);
    const onOpen = () => setOn(true);
    const Close = () => setOn(false);
    return (
        <div className='w-full rounded bg-[#2948CE] py-9 px-4 text-white flex justify-between items-center'>
            <div>
                <p className='text-[14px]'>Wallet Balance,</p>

                <h1 className='text-[24px] font-[600] '>
                    NGN 200,000
                </h1>
            </div>

            <div className='flex'>
                <Balance Icon={Fund} text="Fund Wallet" handleOpen={handleOpen} />

                <Balance Icon={Send} text="Send to User" handleOpen={onOpen} />
            </div>

            <ModalComponent open={open} handleClose={handleClose}>
                <ModalCont hide='hide' handleClose={handleClose} title='Fund Wallet' cancelbtn={cancelIcon} text='Continue'>
                    <div>
                        <h1 className='font-[600]'>Fund Wallet</h1>
                        <p className='text-[15px] font-[500] text-custom-gray'>Select how you want to fund your wallet</p>
                    </div>
                    <div className='py-4'>
                        <Link className='flex items-center py-4 w-full rounded px-2 bg-[#F2F4F7] border-solid border-[1px] border-[#F2F4F7] hover:bg-secondary/[.2] hover:border-solid hover:border-[1px] hover:border-secondary/[.5] ease-linear'>
                            <img src={Deposit} alt="" className='mr-2' />
                            <p className='ml-2 font-[500]'>Bank Transfer</p>
                        </Link>

                        <Link className='flex items-center py-4 w-full rounded px-2 bg-[#F2F4F7] border-solid border-[1px] border-[#F2F4F7] hover:bg-secondary/[.2] hover:border-solid hover:border-[1px] hover:border-secondary/[.5] ease-linear mt-[15px]'>
                            <img src={Card} alt="" className='mr-2' />
                            <p className='ml-2 font-[500]'>Card</p>
                        </Link>
                    </div>
                    <CustomInput type='Amount' image={Naira} />
                </ModalCont>
            </ModalComponent>

            <ModalComponent open={on} handleClose={Close}>
                <ModalCont hide='hide' handleClose={Close} title='Send to user' cancelbtn={cancelIcon} text='Pay'>
                    <CustomTextField type='text' label={`Receiver's email address`} />
                    <CustomInput type='Amount' image={Naira} />
                    <div className='mt-[23px]'></div>
                    <CustomTextField type='password' label='PIN' />
                    <div className='w-full my-[10px] p-2 flex justify-between items-center'>
                        <p>
                            Add to Beneficiary
                        </p>
                        <CustomizedSwitches />
                    </div>
                </ModalCont>
            </ModalComponent>
        </div>
    );
}

const QuickActionCard = ({ card = [] }) => {
    return (
        <div className='grid grid-cols-2 gap-2 items-center'>
            {card.map((cards, i) => (
                <>
                    <div key={i} onClick={cards.handleOpen} className='border border-primary-[1px] rounded-lg w-full flex flex-col justify-center items-center p-[70px] cursor-pointer'>
                        <img src={cards.icon} alt='Quick Action' />
                        <p className='text-nowrap mt-2 font-[500] text-[18px]'>{cards.actionName}</p>
                    </div>
                    <ModalComponent open={cards.open} handleClose={cards.handleClose}>
                        {cards.children}
                    </ModalComponent>
                </>
            ))}



        </div>
    )
}


const TransactionHistory = ({ list = [] }) => {
    return (
        <div className='h-[475px] overflow-scroll'>
            <ul>
                {list.map((lists, index) => (
                    <li key={index} className='flex justify-between items-center mt-4'>
                        <div className='flex'>
                            <img src={lists.svg} alt="icon" className='mr-2' />

                            <div >
                                <h1 className='font-[600]'>{lists.name}</h1>
                                <p className='font-[400]'>{lists.status}</p>
                            </div>
                        </div>

                        <div>
                            <h1 className={`text-custom-green`} id={lists.color}>-NGN{" "}{lists.amount}</h1>
                            <p>{lists.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { BalanceCard, QuickActionCard, TransactionHistory };