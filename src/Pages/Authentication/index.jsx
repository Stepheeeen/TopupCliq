import React from 'react'

export const Background = ({children, padding}) => {
  return (
    <div className='bg-auth h-[100vh] w-full grid place-items-center'>
    <div className='w-1/3 bg-white rounded p-5 max-h-[85%] overflow-scroll' id={padding}>
    {children}
    </div>
    </div>
  )
}