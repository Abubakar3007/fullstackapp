import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import Sidebar from './Sidebar';

const Header = () => {
  const location = useLocation();
  const isPathProfile = location.pathname === '/my-profile/';
  const dropdownArray = ["dashboard", "my listing", "my favorite", "my package", "my invoice", "my profile", "my listing", "logout"]

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className='py-6 shadow-lg sw-full'>
      <div className="container max-w-[1200px] w-full mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <a href="" className='text-3xl font-bold'>Logo</a>
        {/* Right header */}
        <div className='flex items-center gap-8'>
          {/* Search button */}
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
          {/* Favorite button */}
          <button><i className="fa-regular fa-heart"></i></button>
          {
            !user ? (
              <div className='py-2 px-4 rounded-full bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] text-sm flex gap-1 items-center'>
                <Link to='/register/'>Register</Link>
                <span>/</span>
                <Link to='/login/'>Login</Link>
              </div>
            )
              : (
                <div className='relative'>
                  <Link to='/my-profile/' className='w-10 h-10 cursor-pointer bg-white rounded-full text-[#ff7101] font-bold text-xl flex justify-center items-center shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]'>
                    <span>{user?.email.charAt(0).toUpperCase()}</span>
                    {/* <img src="" alt=""/> */}
                  </Link>
                  {/* dropdown */}
                  <div className='absolute top-[calc(100%+10px)] bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] w-[200px] rounded-[4px] left-[50%] -translate-x-1/2 invisible opacity-0'>
                    <ul>
                      {
                        dropdownArray.map((ele, index) => (
                          <li key={index}>
                            <Link to={`/${ele.replace(/\s+/g, '-').toLowerCase()}`} className='block p-3 border-b border-[#e9e9e9] text-sm capitalize'>{ele}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              )
          }
          {/* Add car button */}
          <button className='px-4 py-2 rounded-full bg-[#ff7101] text-white text-sm'>
            <i className="fa-solid fa-car"></i>
            <span className='inline-block ml-2'>Sell your car</span>
          </button>
        </div>
      </div>
      {
        (user && isPathProfile) ? (<Sidebar />): ''
      }
    </header>
  )
}

export default Header