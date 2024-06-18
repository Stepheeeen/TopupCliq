import React from 'react'
import { PrimaryBtn } from '../Button/button'
import Edit from '../../Assets/Images/edit.svg'
import Delete from '../../Assets/Images/delete.svg'
import { Link } from 'react-router-dom'

const BeneficiaryCard = ({Card = []}) => {
  return (
    <>
    {Card.map((cards, index) => (
        <div key={index} className='w-[100%] flex justify-between items-center p-4 rounded-md shadow-md bg-white'>
            <div className='text-[14px] font-[500] overflow-hidden'>
                <h1 className='text-primary font-[800] text-[16px] mb-3'>{cards.title}</h1>
                <p>{cards.name}</p>
                <p>{cards.details}</p>
                <p>Added on 16 Nov, 2022</p>
            </div>
            <div className='ml-2 mt-8'>
                <PrimaryBtn variant='contained' size='small' text='pay'/>
                <div className='flex mt-4 justify-between'>
                    <Link>
                    <img src={Edit} alt="" />
                    </Link>
                    <Link>
                    <img src={Delete} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default BeneficiaryCard
