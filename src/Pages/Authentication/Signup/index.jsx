import React from 'react'
import { Background } from '..'
import Logo from '../../../Assets/Images/logo.svg'
import CustomTextField from '../../../Components/Input/input'
import { PrimaryBtn } from '../../../Components/Button/button'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <Background padding="none">
            <div className='w-full grid place-items-center sticky top-0 z-50 bg-white p-3'>
                <img src={Logo} alt="Logo" />
            </div>

            <div className='my-[18px] mb-3'>
                <h1 className='text-custom-black font-medium'>Create account</h1>
            </div>
            <form action="" className='w-full flex flex-col justify-between items-center'>
                <CustomTextField
                    label="First Name" type="text" margin="normal" />
                <CustomTextField
                    label="Last Name" type="text" margin="normal" />
                <CustomTextField
                    label="Email Address" type="email" margin="normal" />
                <CustomTextField
                    label="Phone Number" type="text" margin="normal" />
                <CustomTextField
                    label="Password" type="password" margin="normal" />
                <CustomTextField
                    label="Confirm Password" type="password" margin="normal" />
                <br />
                <PrimaryBtn size="large" CustomBg="bg-primary" variant="contained" text="Log in" styling="w-full mt-[20px]" />

                <div className='font-medium mt-[10px] mb-[5px]'>
                        Have an account? {" "}
                    <Link className='text-primary my-[15px] mb-5 font-medium' to="/">Log in</Link>
                    </div>
            </form>
        </Background>
    );
}

export default index;