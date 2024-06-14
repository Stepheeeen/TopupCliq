import React from 'react'
import Balance from '../Button/Balance';
import Send from '../../Assets/Images/send-2.svg'
import Fund from '../../Assets/Images/wallet-add.svg'

const BalanceCard = () =>{
    return(
        <div className='w-full rounded bg-[#2948CE] py-9 px-4 text-white flex justify-between items-center'>
            <div>
                <p className='text-[14px]'>Wallet Balance,</p>

                <h1 className='text-[24px] font-[600] '>
                    NGN 200,000
                </h1>
            </div>

            <div className='flex'>
                <Balance Icon={Fund} text="Fund Wallet"/>
                <Balance Icon={Send} text="Send to User"/>
            </div>
        </div>
    );
}

const QuickActionCard = ({card = []}) => {
    return(
        <div className='grid grid-cols-2 gap-2 items-center'>
        {card.map((cards, i) => (
            <div key={i} className='border border-primary-[1px] rounded-lg w-full flex flex-col justify-center items-center p-[70px]'>
                <img src={cards.icon} alt='Quick Action' />
                <p className='text-nowrap mt-2 font-[500] text-[18px]'>{cards.actionName}</p>
            </div>
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

                            <div className='font-[600]'>
                                <h1 >{lists.name}</h1>
                                <p>{lists.status}</p>
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