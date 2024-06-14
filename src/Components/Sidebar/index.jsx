import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/logo.svg'
import Logout from '../../Assets/Images/Logout'
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Sidebar = ({ pages = [], isLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <aside className='w-[20%] h-full shadow-md p-5 pl-4 fixed bg-white'>
      <div className='mb-[15px]'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='flex flex-col text-black'>
        {pages.map((page, index) => (
          <Link 
            to={isLoggedIn ? `${page.navpage}` : '/'} 
            key={index} 
            className={`flex mt-[5px] hover:text-[#2948CE] hover:bg-secondary/[0.2] items-center p-3 rounded sidebar`}
            activeClassName={`bg-${page.navpage}-active`}
            isActive={(match, location) => location.pathname === `${page.navpage}`}
          >
            <span className='mr-2'>{page.icon}</span>
            {page.pagename}
          </Link>
        ))}

        <button
          onClick={handleOpen}
          id="red"
          className={`flex mt-[5px] items-center p-3 rounded sidebar`}
        >
          <span className='mr-2'><Logout /></span>
          Logout
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-custom-red'>
            Confirm Logout
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to logout?
          </Typography>
          <div className='flex items-center w-full justify-between mt-5'>
          <Button onClick={handleClose} variant="contained" className='px-5 py-2 border-none'>
            Cancel
          </Button>

          <Link to='/' className='bg-custom-red hover:bg-[#850808] text-white px-5 py-2 rounded'>
            Logout
          </Link>
          </div>
        </Box>
      </Modal>
    </aside>
  )
}

export default Sidebar;
