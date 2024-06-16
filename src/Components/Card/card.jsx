import React from 'react'
import { useState } from 'react';
import Balance from '../Button/Balance';
import Send from '../../Assets/Images/send-2.svg'
import Fund from '../../Assets/Images/wallet-add.svg'
import ModalComponent from '../Modal/Pin';

const BalanceCard = () =>{
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [on, setOn] = useState(false);
    const onOpen = () => setOn(true);
    const Close = () => setOn(false);
    return(
        <div className='w-full rounded bg-[#2948CE] py-9 px-4 text-white flex justify-between items-center'>
            <div>
                <p className='text-[14px]'>Wallet Balance,</p>

                <h1 className='text-[24px] font-[600] '>
                    NGN 200,000
                </h1>
            </div>

            <div className='flex'>
                <Balance Icon={Fund} text="Fund Wallet" handleOpen={handleOpen}/>
                
                <Balance Icon={Send} text="Send to User" handleOpen={onOpen}/>
            </div>

            <ModalComponent open={open} handleClose={handleClose}>
            <div className=' mt-10 '>
            <p className=' mb-3 text-back-color2'>Enter your Zouse PIN</p>
            <p className=' mb-3 text-[#808285]'>Enter your 4-Digit PIN to confirm transaction</p>
            </div>
            </ModalComponent>

            <ModalComponent open={on} handleClose={Close}>
            <div className=' mt-10 '>
            <p className=' mb-3 text-back-color2'>Enter your Zouse PIN</p>
            </div>
            </ModalComponent>
        </div>
    );
}

const QuickActionCard = ({card = []}) => {
    return(
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


const TransactionHistory = ({list = []}) =>{
    return(
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