import React, { useRef } from 'react';
import { TextField } from '@mui/material';
import { Background } from '..';
import { PrimaryBtn } from '../../../Components/Button/button';
import { Link } from 'react-router-dom';
const VerifyPin = () => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (value.length === 1 && index < 3) {
            inputRefs.current[index + 1].focus();
        }
        if (value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            inputRefs.current.forEach((input) => {
                if (input) {
                    input.value = ''; // Clear all inputs
                }
            });
            inputRefs.current[0].focus(); // Set focus to the first input
        }
    };

    return (
        <Background>
            <Link to="/Signup" >
            {/* <img src={backNav} alt="" className=''/> */}
            </Link>

            <div className='w-full grid place-items-center sticky top-0 z-50 bg-white p-3 font-bold text-custom-black text-[1.4rem]'>
                Verify Account
            </div>
            <div className='my-[30px]'>
                    <h1 className='text-custom-black font-medium'>Enter OTP</h1>
                    <p className='text-custom-gray font-medium '>Please enter the 6-digit code sent to your email address</p>
                </div>
            <div className="flex justify-center items-center space-x-2">
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                    <TextField
                        key={idx}
                        inputProps={{ maxLength: 1, style: { textAlign: 'center', height: 40, background: '#F2F4F7' } }}
                        variant="filled"
                        size="small"
                        inputRef={(el) => (inputRefs.current[idx] = el)}
                        onChange={(e) => handleChange(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        type='number'
                    />
                ))}
            </div>

            <div className='h-[140px]'></div>

            <PrimaryBtn variant="contained" size="large" text="Verify" styling="w-full" />
        </Background>
    );
};

export default VerifyPin;
