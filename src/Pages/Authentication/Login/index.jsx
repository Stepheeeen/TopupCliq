import React from 'react'
import { Background } from '..'
import Logo from '../../../Assets/Images/logo.svg'
import CustomTextField from '../../../Components/Input/input'
import { PrimaryBtn } from '../../../Components/Button/button'
import { Link } from 'react-router-dom'



const index = () => {
    return (
        <Background>
            <div className='w-full grid place-items-center'>
                <img src={Logo} alt="Logo" />
            </div>

            <div>
                <div className='my-[18px] mb-3'>
                    <h1 className='text-custom-black font-[700]'>Log in to your account</h1>
                    <p className='text-custom-gray font-[700] text-[16px]'>Securely Log in to your account</p>
                </div>

                <form action="" className='w-full flex flex-col justify-between items-center'>

                    <CustomTextField
                        label="Email Address" type="email" margin="normal"/>
                    <CustomTextField
                        label="Password" type="password" margin="normal"/>
                        
                        <Link className='text-primary mt-[10px] mb-[40px] font-medium'>
                        I forgot my password
                        </Link>
                    
                    <PrimaryBtn size="large" CustomBg="bg-primary" variant="contained" text="Log in" styling="w-full mt-[20px]"/>

                    <div className='font-medium mt-[10px] mb-[5px]'>
                        Don't have an account? {" "}
                    <Link className='text-primary my-[15px] mb-5 font-medium' to="/Signup">Sign Up</Link>
                    </div>
                    
                </form>
            </div>

        </Background>
    )
}

export default index