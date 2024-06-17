import React from 'react'

const customInput = ({type, image, placeholder}) => {
    return (
        <div className='my-3'>
            <p className='font-[500]'>
                {type}
            </p>

            <div className='w-full h-[50px] rounded flex bg-[#F2F4F7] border-solid border-[1px] border-custom-gray/[.2]'>
                <div className='w-[20%] border-solid border-1 '>
                    <img src={image} alt="" className='w-[55%] h-[55%] mt-[10px] block m-auto ' />
                </div>
                <input type="text" name="" id="" placeholder={placeholder} className='w-[80%] outline-none bg-transparent border-solid border-1 border-black' />
            </div>
        </div>
    )
}

export default customInput
