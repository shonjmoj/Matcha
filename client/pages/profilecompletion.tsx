import React from 'react';
import { motion } from 'framer-motion';

export default function profilecompletion() {
  return (
    <div className='h-full w-full flex flex-col gap-4 items-center lg:justify-start'>
      <motion.div
        className='h-max my-2 lg:my-4 lg:w-[80%] lg:flex lg:items-center lg:justify-between'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.2 }}
          className='text-2xl font-bold md:text-2xl lg:text-3xl my-2'>
          Matcha
        </motion.h1>
        <div className='lg:m-4 hidden lg:block font-semibold'>
          <motion.button>Log out</motion.button>
        </div>
      </motion.div>
      <motion.div
        className='m-2 lg:m-4 w-full flex flex-col items-center justify-center'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-8'>
          Complete your profile
        </h1>
        <form className='flex flex-col gap-2 md:gap-4 lg:grid lg:grid-cols-2 lg:w-[40%]'>
          <label className='flex flex-col font-semibold'>
            Age
            <input
              type='number'
              className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'
            />
          </label>
          <label className='flex flex-col font-semibold'>
            Sexe
            <select className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
              <option defaultValue={''} hidden></option>
              <option value='Male' className='bg-soft-pink'>
                Male
              </option>
              <option value='Female' className='bg-soft-pink'>
                Female
              </option>
              <option value='Other' className='bg-soft-pink'>
                Other
              </option>
            </select>
          </label>
          <label className='flex flex-col font-semibold'>
            Oriantation
            <select className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
              <option defaultValue={''} hidden></option>
              <option value='Straight' className='bg-soft-pink'>
                Straight
              </option>
              <option value='Bisexual' className='bg-soft-pink'>
                Bisexual
              </option>
              <option value='Lesbian' className='bg-soft-pink'>
                Lesbian
              </option>
              <option value='Homosexual' className='bg-soft-pink'>
                Homosexual
              </option>
            </select>
          </label>
          <label className='flex flex-col font-semibold'>
            Interest
            <select className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
              <option defaultValue={''} hidden></option>
              <option value='Boys' className='bg-soft-pink'>
                Boys
              </option>
              <option value='Girls' className='bg-soft-pink'>
                Girls
              </option>
              <option value='Both' className='bg-soft-pink'>
                Both
              </option>
            </select>
          </label>
          <label className='flex flex-col font-semibold col-span-2'>
            Bio
            <textarea className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'></textarea>
          </label>
          <motion.button
            type='submit'
            className='p-1 mt-2 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-2'
            whileTap={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}>
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
