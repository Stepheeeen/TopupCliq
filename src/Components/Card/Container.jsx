import React from 'react'

const Container = ({children, tag}) => {

  return (
    <div className='w-1/2 rounded-lg shadow-md bg-white p-5'>
      <h1 className='text-[21px] font-[500] mb-2'>
        {tag}
      </h1>
      {children}
    </div>
  )
}

export default Container

