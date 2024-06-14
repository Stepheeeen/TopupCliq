import React from 'react'

const Balance = ({text, Icon}) => {
  return (
    <div className='bg-white p-2 text-black flex rounded-md mr-2 items-center'>
      <p className='font-[500] text-primary text-[16px]'>{text}</p>
      <img src={Icon} alt="Button" className='ml-2'/>
    </div>
  )
}

export default Balance
