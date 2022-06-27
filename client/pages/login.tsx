import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <motion.div
      className='text-white container w-full sm:w-[50%]'
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='text-2xl xl:text-4xl text-center mb-8 xl:mb-12 font-semibold'>
        It is never too late <br /> to fall in love
      </motion.h1>
      <form
        className='flex flex-col gap-2 items-center'
        onSubmit={handleSubmit((data) => console.log(data))}>
        <label className='flex flex-col font-semibold'>
          Username / email
          <input
            type='text'
            {...register('username / email')}
            className='bg-transparent border-white font-normal border-[1px] outline-none p-2'
          />
        </label>
        <label className='flex flex-col font-semibold'>
          Password
          <input
            type='password'
            {...register('password')}
            className='bg-transparent border-white font-normal border-[1px] outline-none p-2'
          />
        </label>
        <span className='text-sm lg:text-md font-light'>
          You are new here ?{' '}
          <span className='underline'>
            <Link href='/registration'>Create an account</Link>
          </span>
        </span>
        <motion.button
          type='submit'
          className='mt-2 border-2 px-20 py-2 shadow-xs hover:shadow-sm hover:shadow-white transition-all duration-200 shadow-white/50'
          whileTap={{
            scale: 1,
          }}
          whileHover={{ scale: 1.1 }}>
          Login
        </motion.button>
      </form>
    </motion.div>
  );
}
