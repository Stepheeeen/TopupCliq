import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/logo.svg'

const Sidebar = ({ pages = [], isLoggedIn }) => {
  return (
    <aside className='w-[20%] h-full shadow-md p-5 pl-4 fixed bg-white'>
      <div className='mb-[15px]'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='flex flex-col text-black'>
        {pages.map((page, index) => (
          <Link 
          to={isLoggedIn ? `/${page.navpage}` : '/'} 
          key={index} 
          id={page.color} 
          className={`flex mt-[5px] hover:text-[#2948CE] hover:bg-secondary/[0.2] items-center p-3 rounded sidebar`}
          activeClassName={`bg-${page.navpage}-active`}
          isActive={(match, location) => location.pathname === `/${page.navpage}`}
          >
            <span className='mr-2'>{page.icon}</span>
            {page.pagename}
          </Link>
        ))

        }

      </div>
    </aside>
  )
}

export default Sidebar