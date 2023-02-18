import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <div className='block'>
      <div className='p-6 lg:px-40 lg:py-4 flex flex-col md:grid md:grid-cols-3 md:grid-rows-5 md:h-[57vh] gap-6'>
        <div className='min-h-[40vh] md:min-h-0 md:col-span-2 md:row-span-3 relative'>
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

        <h1 className='md:col-span-1 font-extrabold tracking-wide text-5xl md:text-4xl lg:text-5xl h-full pr-24'>
          The Bright Future of Web 3.0?
        </h1>

        <p className=' md:col-start-2 col-end-3 text-sm text-dark-grayish-blue'>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>

        <button className='bg-soft-red  md:col-start-2 md:w-1/2 md:self-end md:h-2/3 tracking-[.3rem] self-start font-bold text-sm text-white px-10 py-5 my-8 md:m-0 md:p-0'>
          READ MORE
        </button>

        <section className='bg-very-dark-blue col-span-1 md:col-start-3 md:col-end-4 md:row-span-full px-4 py-6 space-y-5'>
          <h2 className='text-4xl text-soft-orange font-bold'>New</h2>
          <div className='flex flex-col'>
            <article className='flex flex-col'>
              <h3 className='text-white font-bold text-xl'>
                Hydrogen vs Electric Cars
              </h3>
              <p className='text-grayish-blue py-2 text-sm'>
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </article>
            <hr className='border-dark-grayish-blue mt-4' />
          </div>
          <div className='flex flex-col'>
            <article className='flex flex-col'>
              <h3 className='text-white font-bold text-xl'>
                The Downsides of AI Artistry
              </h3>
              <p className='text-grayish-blue py-2 text-sm'>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </article>
            <hr className='border-dark-grayish-blue mt-4' />
          </div>
          <div className='flex flex-col'>
            <article className='flex flex-col'>
              <h3 className='text-white font-bold text-xl'>
                Is VC Funding Drying Up?
              </h3>
              <p className='text-grayish-blue py-2 text-sm'>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </div>
        </section>
      </div>

      <section className='flex flex-col space-y-6 md:grid md:grid-cols-3 md:gap-6 md:mt-6 p-6 lg:px-40 lg:py-4'>
        <div className='flex space-x-4 col-span-1'>
          <Image
            src='/image-retro-pcs.jpg'
            alt='img of retro pc'
            width={75}
            height={80}
          />
          <div className='flex flex-col space-y-1'>
            <h2 className='text-grayish-blue text-3xl font-bold'>01</h2>
            <h2 className='text-very-dark-blue font-bold'>
              Reviving Retro PCs
            </h2>
            <p className='text-dark-grayish-blue'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className='flex space-x-4 col-start-2 col-end-3'>
          <Image
            src='/image-top-laptops.jpg'
            alt='img of top laptops'
            width={75}
            height={80}
          />
          <div className='flex flex-col space-y-1'>
            <h2 className='text-grayish-blue text-3xl font-bold'>02</h2>
            <h2 className='text-very-dark-blue font-bold'>
              Reviving Retro PCs
            </h2>
            <p className='text-dark-grayish-blue'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className='flex space-x-4  col-start-3 col-end-4'>
          <Image
            src='/image-gaming-growth.jpg'
            alt='img of gaming'
            width={75}
            height={80}
          />
          <div className='flex flex-col space-y-1'>
            <h2 className='text-grayish-blue text-3xl font-bold'>03</h2>
            <h2 className='text-very-dark-blue font-bold'>
              Reviving Retro PCs
            </h2>
            <p className='text-dark-grayish-blue'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
