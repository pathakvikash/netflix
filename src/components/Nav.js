'use client';
import React, { useState, useContext } from 'react';
import Search from './svgComp/Search';
import Notification from './svgComp/Notification';
import Image from 'next/image';
import UserContext from '../contexts/UserContext';
import { Lang } from './small/Lang';

const Nav = () => {
  const { currentRoute, handleRoute, logoutUser } = useContext(UserContext);

  let onHomePage = currentRoute === '/';
  let lnks = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  const handleLinkClick = (link) => {
    handleRoute(link.toLowerCase().split(' ').join(''));
  };

  return (
    <nav className='flex z-20 fixed top-0 w-full items-center justify-between px-4 md:px-8 py-2 md:py-4 bg-transparent text-white'>
      <div className='flex items-center justify-between'>
        <Image
          width={80}
          height={80}
          className='cursor-pointer w-auto h-auto'
          src='/logo.png'
          alt=''
          onClick={() => handleRoute('/')}
        />
        {currentRoute === '/home' && (
          <div className='flex justify-between items-center w-full'>
            <div className='ml-4 hidden md:flex'>
              {lnks.map((lnk, id) => (
                <div
                  key={id}
                  className='text-sm cursor-pointer ml-6'
                  onClick={() => handleLinkClick(lnk)}
                >
                  {lnk}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {onHomePage ? (
        <div className='ml-auto flex items-center'>
          <Lang lang={['English', 'हिन्दी']} />

          <button
            className='ml-4 md:ml-8 bg-red-600 px-4 py-2 rounded-md border border-rose-950'
            onClick={() => handleRoute('/signin')}
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className='ml-6 md:ml-8 flex items-center'>
          <div className='text-xl cursor-pointer relative'>
            <span role='img' aria-label='Search' onClick={toggleSearch}>
              <Search />
            </span>
            {showSearch && (
              <div className='absolute right-[30px] top-[-9px] w-48 bg-gray-800 border border-gray-600 rounded'>
                <input
                  type='text'
                  placeholder='Search'
                  className='p-2 h-10 w-full bg-transparent text-white placeholder-gray-500 focus:outline-none'
                />
              </div>
            )}
          </div>

          <div
            className='ml-4 text-xl cursor-pointer'
            onClick={() => handleRoute('/notifications')}
          >
            <span role='img' aria-label='Notifications'>
              <Notification />
            </span>
          </div>

          <div
            className='ml-4 text-xl cursor-pointer'
            onClick={() => logoutUser()}
          >
            <span role='img' aria-label='User'>
              <img
                src='https://nextflix-azure.vercel.app/assets/avatar.png'
                alt=''
                className='w-8 h-8 '
              />
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
