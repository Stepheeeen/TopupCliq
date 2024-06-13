import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ pages = [], isLoggedIn }) => {
  return (
    <aside className='w-[20%] h-[100vh] shadow-sm p-5'>
      <div>
        Logo
      </div>
      <div className='flex flex-col text-black'>
        {pages.map((page, index) => (
          <Link 
          to={isLoggedIn ? `/${page.navpage}` : '/'} 
          key={index} 
          id={page.color} 
          className='mt-3'
          activeClassName={`bg-${page.navpage}-active`}
          isActive={(match, location) => location.pathname === `/${page.navpage}`}
          >
            <span className='mr-2'>
              <img src={page.icon} alt="" className="transition duration-300 hover:stroke-[#2948CE]"/></span>
            {page.pagename}
          </Link>
        ))

        }

      </div>
    </aside>
  )
}

export default Sidebar