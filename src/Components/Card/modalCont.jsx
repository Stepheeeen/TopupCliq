import React from 'react'
import { PrimaryBtn } from '../Button/button'

const modalCont = ({backbtn, title, cancelbtn, children, text, hide}) => {
  const style = {
    backgroundColor : '#2948CE',
  }
  return (
    <div className='w-full'>
      <header className='flex justify-between items-center py-5 px-3 shadow-sm w-full'>
        <p className='cursor-pointer' id={hide}>
          <img src={backbtn} alt="" />
        </p>

        <h1 className='text-custom-black text-[18px] font-[700]'>
            {title}
        </h1>
        <p className='cursor-pointer'>
        <img src={cancelbtn} alt="" />
        </p>

      </header>
      <div className='p-3'>
        <form>
            {children}
        </form>

        <PrimaryBtn text={text} styling={`${style} w-full mt-3`} variant='contained'/>
      </div>
    </div>
  )
}

export default modalCont
