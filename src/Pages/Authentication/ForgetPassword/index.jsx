import React from 'react'
import { Background } from '..'
import Logo from '../../../Assets/Images/logo.svg'
import CustomTextField from '../../../Components/Input/input'
import { PrimaryBtn } from '../../../Components/Button/button'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <Background padding="none">
            <div className='w-full flex items-center justify-between bg-white p-3 font-[700] text-custom-black text-[1.4rem]'>
                <Link to="/Signup" className='font-bold text-3xl cursor-pointer ml-[-10px]'>
                    &larr;
                </Link>

                <p>Forgot password</p>

                <Link className='font-bold text-3xl cursor-pointer'>
                    &times;
                </Link>
            </div>

            <div className='w-full grid place-items-center sticky top-0 z-50 bg-white p-3'>
                <img src={Logo} alt="Logo" />
            </div>

            <form action="" className='w-full flex flex-col justify-between items-center'>
                <CustomTextField
                    label="Email Address" type="email" margin="normal" />
                <br />
                <PrimaryBtn size="large" CustomBg="bg-primary" variant="contained" text="Reset Password" styling="w-full mt-[20px]" />
            </form>
        </Background>
    )
}

export default index