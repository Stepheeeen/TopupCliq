import { Button } from '@mui/material';
import React from 'react';

const buttonStyle = {
  backgroundColor: 'white',
  padding: '8px 16px', // Adjust padding as needed
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px', // Adjust border radius as needed
  marginRight: '8px', // Adjust margin as needed
  minWidth: '120px', // Adjust minimum width as needed
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Example of box shadow
};

const textStyle = {
  fontWeight: '600',
  color: '#3f51b5', // Example of custom text color
  fontSize: '16px',
};

const Balance = ({ text, Icon, handleOpen }) => {
  return (
    <Button variant="contained" style={buttonStyle} onClick={handleOpen}>
      <p style={textStyle}>{text}</p>
      <img src={Icon} alt="Icon" style={{ marginLeft: '8px', height: '25px' }} />
    </Button>
  );
};

export default Balance;
