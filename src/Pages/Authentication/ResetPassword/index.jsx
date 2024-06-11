import React from 'react'
import { Background } from '..'
import Logo from '../../../Assets/Images/logo.svg'
import CustomTextField from '../../../Components/Input/input'
import { PrimaryBtn } from '../../../Components/Button/button'

const index = () => {
    return (
        <Background>
            <div className='w-full grid place-items-center sticky top-0 z-50 bg-white p-3'>
                <img src={Logo} alt="Logo" />
            </div>
            <form action="" className='w-full flex flex-col justify-between items-center'>
                <CustomTextField
                    label="Email Address" type="email" margin="normal" />
                <CustomTextField
                    label="OTP" type="text" margin="normal" />
                <CustomTextField
                    label="New Password" type="password" margin="normal" />
                <CustomTextField
                    label="Confirm Password" type="password" margin="normal" />
                <br />
                <PrimaryBtn size="large" CustomBg="bg-primary" variant="contained" text="Reset Password" styling="w-full mt-[20px]" />
            </form>
        </Background>
    )
}

export default index