import React from 'react'
import { PrimaryBtn } from '../Button/button'

const modalCont = ({backbtn, title, cancelbtn, children, text}) => {
  return (
    <div className='w-full'>
      <header className='flex justify-between items-center py-5 px-2 shadow-sm'>
        {backbtn}
        <h1>
            {title}
        </h1>
        {cancelbtn}
      </header>
      <div>
        <form>
            {children}
        </form>
      </div>

        <PrimaryBtn text={text} />
    </div>
  )
}

export default modalCont
