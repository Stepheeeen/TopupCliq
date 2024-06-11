// src/components/CustomTextField.js
import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, type, value, onChange, variant, margin}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant={variant}
      fullWidth
      className="bg-[#F2F4F7] rounded-md"
      margin={margin}
    />
  );
};

export default CustomTextField;
