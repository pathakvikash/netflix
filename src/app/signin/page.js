'use client';
import React, { useState } from 'react';
const Signin = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center '>
      <img
        className='w-full h-[60%] opacity-50 border border-gray-600 border-b-[6px]  bg-cover overflow-hidden object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt=''
      />
      <div className='absolute top-40 '>
        <SignInForm />
      </div>
    </div>
  );
};

export default Signin;

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('login', 'true');
      window.location.href = '/';
    }
  };
  return (
    <div className=' bg-black p-4 w-[400px] h-[70vh]'>
      <div className='max-w-md mx-auto p-7'>
        <h2 className='text-2xl font-bold text-white mb-4'>Sign In</h2>
        <input
          type='email'
          className='w-full bg-transparent p-2 border border-gray-600 rounded mb-2'
          placeholder='Email or phone number'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          className='w-full p-2 border bg-transparent border-gray-600 rounded mb-2'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={handleSubmit}
          className='w-full bg-red-600 text-white py-2 rounded hover:bg-red-800'
        >
          Sign In
        </button>
        <p className='text-sm flex justify-center text-gray-400 mt-2'>OR</p>
        <button className='w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 mb-2'>
          Use a Sign-In Code
        </button>
        <button className='w-full  text-white py-2 rounded hover:bg-gray-700'>
          Forgot Password ?
        </button>
        <div className='flex items-center justify-start'>
          <input type='checkbox' defaultChecked className='mr-2' />
          <label className='text-gray-400'>Remember me</label>
        </div>
        <div className='mt-4 flex items-center text-center'>
          <p className='text-sm text-gray-400'>New to Netflix?</p>
          <button className=' text-white py-2 px-2'>Sign up now</button>
        </div>
        <p className='text-xs text-gray-400 mt-2'>
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.
          <a className='underline text-blue-700 px-2' href='#'>
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}
