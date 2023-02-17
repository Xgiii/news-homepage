import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <div className='p-6 lg:px-40 lg:py-4 flex flex-col md:grid md:grid-cols-10 md:grid-rows-5 h-[60vh] gap-6'>
      <div className='min-h-[40vh] md:min-h-0 md:col-span-7 md:row-span-3 relative'>
        <Image
          src='/image-web-3-desktop.jpg'
          alt='main-img'
          className='hidden md:block object-cover'
          fill
        />
        <Image
          src='/image-web-3-mobile.jpg'
          alt='main-img'
          className=' md:hidden object-cover'
          fill
        />
      </div>

      <h1 className='md:col-span-4 font-extrabold tracking-wide text-5xl md:text-4xl lg:text-5xl pr-24'>
        The Bright Future of Web 3.0?
      </h1>

      <p className=' md:col-start-5 col-end-8 text-sm text-dark-grayish-blue'>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>

      <button className='bg-soft-red  md:col-start-5 md:col-end-7 md:self-end md:h-2/3 tracking-[.3rem] self-start font-bold text-sm text-white px-10 py-5 md:p-0'>
        READ MORE
      </button>

      <section className='bg-very-dark-blue col-span-1 md:col-start-8 md:col-end-11 md:row-span-full'></section>
    </div>
  );
}

export default HomePage;
