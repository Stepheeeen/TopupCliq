import React from 'react'
import Balance from '../Button/Balance';
import Send from '../../Assets/Images/send-2.svg'
import Fund from '../../Assets/Images/wallet-add.svg'

const BalanceCard = () =>{
    return(
        <div className='w-full rounded bg-[#2948CE] py-7 px-4 text-white flex justify-between items-center'>
            <div>
                <p className='text-[14px]'>Wallet Balance,</p>

                <h1 className='text-[24px] font-[800] '>
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
        <div>
        {card.map((cards, i) => (
            <div key={i} className='border border-primary-[1px] rounded-md w-[50%] h-[50%]'>
                <img src={cards.icon} alt='Quick Action' />
                <p>{cards.actionName}</p>
            </div>
        ))}
        </div>
    )
}


const TransactionHistory = () =>{
    return(
        <div>
            
        </div>
    )
}

export { BalanceCard, QuickActionCard, TransactionHistory };