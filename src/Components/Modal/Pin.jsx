import React from 'react';
import { Modal, Box, } from '@mui/material';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
};

const ModalComponent = ({ open, handleClose, children }) => {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >

        <Box sx={modalStyle} className='rounded-lg'>
              {children}
        </Box>
    </Modal>
  );
};

export default ModalComponent;
