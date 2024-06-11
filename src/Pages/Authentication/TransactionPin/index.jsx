import React from 'react'
import { Background } from '..'
import CustomTextField from '../../../Components/Input/input'
import { PrimaryBtn } from '../../../Components/Button/button'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <Background>
            <div className='w-full flex items-center justify-between bg-white p-3 font-bold text-custom-black text-[1.4rem]'>

                <p className='ml-[-10px]'>Create transaction PIN</p>

                <Link className='font-medium text-4xl cursor-pointer'>
                    &times;
                </Link>
            </div>

            <div className='my-[18px] mb-3'>
                <h1 className='text-custom-black font-[700]'>Enter 4-digit transaction PIN</h1>
            </div>

            <form action="" className='w-full flex flex-col justify-between items-center'>
                <CustomTextField
                    label="Enter 4-digit PIN" type="password" margin="normal" />
                <CustomTextField
                    label="Confirm 4-digit PIN" type="password" margin="normal" />
                <br />
                <PrimaryBtn size="large" CustomBg="bg-primary" variant="contained" text="Create PIN" styling="w-full mt-[20px]" />
            </form>
        </Background>
    )
}

export default index