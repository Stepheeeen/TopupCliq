import React from 'react'
import Button from '@mui/material/Button';

export const PrimaryBtn = ({variant, size, text, CustomBg, HoverBg, styling, endIcon}) => {
  return (
    <Button variant={variant} size={size} sx={{
        backgroundColor: {CustomBg}, // Custom backround color
        '&:hover': {
          backgroundColor: {HoverBg}, //optional hover background color
        },
      }} className={styling} endIcon={endIcon}>
    {text}
  </Button>
  )
}
