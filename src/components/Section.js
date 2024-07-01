import React from 'react';

function Section() {
  return (
    <section className='bg-black border-b-[6px] border-gray-900 flex flex-col md:flex-row justify-center items-center p-6'>
      <div className='flex-1 flex flex-col items-center text-center md:text-left md:items-start mb-6 md:mb-0'>
        <div className='flex flex-col gap-2 justify-start'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
            Enjoy on your TV
          </h1>
          <p className='text-base md:text-lg lg:text-xl max-w-[33rem] text-gray-300'>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
      </div>
      <div className='flex-1 relative'>
        <div className='flex justify-center items-center'>
          <img
            alt='TV'
            className='z-10 overflow-hidden max-w-full'
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
            data-uia='nmhp-card-animation-asset-image'
          />
          <video
            className='absolute'
            data-uia='nmhp-card-animation-asset-video'
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Section;
