import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function registration() {
  const { register, handleSubmit } = useForm();
  return (
    <motion.div
      className='text-white container w-full sm:w-[30%]'
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='text-2xl xl:text-4xl text-center mb-4 xl:mb-8 font-semibold mx-2'>
        Get noticed for who you are, not what you look like.
      </motion.h1>
      <form
        className='grid lg:grid-cols-2 justify-center items-center gap-3'
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        <label className='flex flex-col font-semibold'>
          First name
          <input
            type='text'
            {...register('firstname')}
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <label className='flex flex-col font-semibold'>
          Last name
          <input
            type='text'
            {...register('lastname')}
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <label className='flex flex-col font-semibold lg:col-span-2'>
          Username
          <input
            type='text'
            {...register('username')}
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <label className='flex flex-col font-semibold lg:col-span-2'>
          email
          <input
            type='email'
            {...register('email')}
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <label className='flex flex-col font-semibold'>
          Password
          <input
            type='password'
            {...register('password')}
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <label className='flex flex-col font-semibold'>
          Confirm Password
          <input
            type='password'
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <motion.button
          type='submit'
          className='mt-2 border-2 p-1 lg:p-2 shadow-xs hover:shadow-sm hover:shadow-white transition-all duration-200 shadow-white/50 lg:col-span-2'
          whileTap={{
            scale: 1,
          }}
          whileHover={{ scale: 1.1 }}>
          Register
        </motion.button>
      </form>
    </motion.div>
  );
}
