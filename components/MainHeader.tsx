'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function MainHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {mobileMenu && (
        <div className='absolute w-screen h-screen z-10 bg-black opacity-50  animate-darken' />
      )}
      <header className='flex justify-between items-center p-6 md:px-32 md:py-24 '>
        <h1 className='text-6xl font-bold font-serif tracking-[-12px]'>W.</h1>
        {mobileMenu ? (
          <XMarkIcon
            onClick={() => setMobileMenu((prevState) => !prevState)}
            className='md:hidden h-10 w-10 cursor-pointer z-30'
          />
        ) : (
          <Bars3Icon
            onClick={() => setMobileMenu((prevState) => !prevState)}
            className='md:hidden h-10 w-10 cursor-pointer z-30'
          />
        )}

        <div
          className={`md:hidden fixed top-0 w-[70vw] h-screen z-20 bg-white shadow-lg p-5
    flex flex-col space-y-5 duration-300 ${
      mobileMenu ? 'right-0' : 'right-[-1024px]'
    }`}
        >
          <ul className='flex flex-col space-y-6 pt-40 px-4 text-xl [&>*]:cursor-pointer'>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>

        <ul className='hidden md:flex text-dark-grayish-blue space-x-6 [&>*]:cursor-pointer'>
          <li className='hover:text-soft-orange'>Home</li>
          <li className='hover:text-soft-orange'>New</li>
          <li className='hover:text-soft-orange'>Popular</li>
          <li className='hover:text-soft-orange'>Trending</li>
          <li className='hover:text-soft-orange'>Categories</li>
        </ul>
      </header>
    </>
  );
}

export default MainHeader;
