'use client';
import React, { useState } from 'react';
import LongCard from '@/components/cards/LongCard';
import Slider from '@/components/small/Slider';
import { homedata, horrordata, trendingNow, comedy } from '@/constant/data';
import MoreInfo from '@/components/MoreInfo';
import TopTen from '@/components/cards/TopTen';
const page = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  function handleMoreInfo() {
    setShowMoreInfo(!showMoreInfo);
  }
  return (
    <div className='bg-black relative text-white'>
      <img
        src='https://image.tmdb.org/t/p/original/eAIHqfS3kXm7kZl4j7ZBfdegyEz.jpg'
        // src={data.poster}
        alt=''
        className='lg:w-full lg:h-auto h-[70vh] object-cover '
      />
      {showMoreInfo && (
        <MoreInfo handleMoreInfo={handleMoreInfo} data={homedata} />
      )}
      <div className='lg:absolute absolute sm:top-[10rem] left-10 md:top-[20rem] top-[10rem]'>
        <h2 className='md:text-[35px] lg:text-[40px] sm:text-[25px] text-[35px] font-semibold'>
          Bad Boys for Life
        </h2>
        <p className='sm:text-[14px] md:text-[20px] font-normal max-w-[500px]'>
          Marcus and Mike are forced to confront new threats, career changes,
          and midlife crises as they join the newly created elite team AMMO of
          the Miami police department to take down the
        </p>
        <div className='btns flex gap-2 max-w-[300px] '>
          <button className='bg-white font-bold flex-1 text-black p-2 border rounded-md '>
            ► Play
          </button>
          <button
            onClick={handleMoreInfo}
            className=' bg-[#6d6d6db3] flex-1 text-white p-2 border rounded-md'
          >
            ⏣ More info
          </button>
        </div>
      </div>
      <Slider title={'Popular on Netflix'} data={homedata} />
      <Slider title={'Horror Movies'} data={horrordata} />
      <Slider title={'Trending Now'} data={trendingNow} />
      <Slider title={'Comedy'} data={comedy} />
      <LongCard />
      <TopTen />
    </div>
  );
};

export default page;
