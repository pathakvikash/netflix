'use client';
import React, { useContext, useEffect } from 'react';
import UserContext from '@/contexts/UserContext';
import Faq from './Faq';
import Section from './Section';

const HomePage = ({ data }) => {
  const { islogin, router } = useContext(UserContext);
  const handleClick = (e) => {
    console.log(e.target.id);
    const ele = document.getElementById('email1');
    ele.focus();
  };

  useEffect(() => {
    if (islogin === 'true') {
      router.push('/home');
    }
  }, [islogin]);
  if (islogin !== 'true') {
    return (
      <main className='bg-black text-white'>
        <div className='relative h-[60vh]'>
          <img
            className='absolute inset-0 h-full w-full object-cover opacity-45'
            src={data[0].imgsrc}
            alt=''
          />
        </div>
        <section className='hero justify-center flex'>
          <div className='hero-text absolute top-1/3 transform -translate-y-1/2 flex flex-col items-center gap-3 text-center px-4 md:px-0'>
            <h1 className='text-2xl md:text-5xl font-bold'>
              Unlimited movies, TV shows, and more
            </h1>
            <p className='text-lg md:text-xl'>
              Watch anywhere. Cancel anytime.
            </p>
            <p className='text-sm md:text-lg'>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className='pt-2 flex flex-col md:flex-row gap-3'>
              <input
                id='email1'
                className='p-2 bg-transparent border border-white w-full md:w-[300px] rounded-md'
                type='text'
                placeholder='Email Address'
              />
              <button
                onClick={handleClick}
                className='bg-red-600 hover:bg-red-900 p-2 border rounded-md border-rose-950'
              >
                Get Started &gt;
              </button>
            </div>
          </div>
        </section>
        <Section />
        <Section />
        <Section />
        <Section />
        <Faq />
      </main>
    );
  }
};

export default HomePage;
