import React from 'react'
import { PrimaryBtn } from '../Button/button'
import { Link } from 'react-router-dom'

const modalCont = ({backbtn, title, cancelbtn, children, text, hide, handleClose}) => {
  const style = {
    backgroundColor : '#2948CE',
  }
  return (
    <div className='w-full max-h-[550px] overflow-scroll relative'>
      <header className='flex justify-between items-center py-5 px-3 bg-white shadow-sm w-full fixed top-0 left-0 h-[60px] z-10 rounded-lg'>
        <p className='cursor-pointer' id={hide}>
          <img src={backbtn} alt="" />
        </p>

        <h1 className='text-custom-black text-[18px] font-[700]'>
            {title}
        </h1>
        <Link className='cursor-pointer' onClick={handleClose}>
        <img src={cancelbtn} alt="" />
        </Link>

      </header>
      <div className='p-3 mt-[62px]'>
        <form className='pb-7'>
            {children}
        </form>

        <PrimaryBtn text={text} styling={`${style} w-full mt-3`} variant='contained'/>
      </div>
    </div>
  )
}

export default modalCont
