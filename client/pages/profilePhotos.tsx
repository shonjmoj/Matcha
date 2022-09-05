import React from 'react';
import ProtectedLayout from '../components/Layouts/ProtectedLayout';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

export default function profilePhotos() {
  return (
    <ProtectedLayout>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className='grid grid-cols-2 sm:grid-cols-4 w-[90%] gap-2 md:gap-4 h-[90%]'>
        <div className='border-2 border-dashed rounded-md h-48 md:h-60 flex items-center justify-center gap-2'>
          <input
            type='file'
            className='opacity-70 hidden'
            accept='image/*'
            id='file'
          />
          <label htmlFor='file' className='cursor-pointer'>
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
        <div className='border-2 border-dashed rounded-md h-48 md:h-60 flex items-center justify-center gap-2'>
          <input
            type='file'
            className='opacity-70 hidden'
            accept='image/*'
            id='file'
          />
          <label htmlFor='file' className='cursor-pointer'>
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
        <div className='border-2 border-dashed rounded-md h-48 md:h-60 flex items-center justify-center gap-2'>
          <input
            type='file'
            className='opacity-70 hidden'
            accept='image/*'
            id='file'
          />
          <label htmlFor='file' className='cursor-pointer'>
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
        <div className='border-2 border-dashed rounded-md h-48 md:h-60 flex items-center justify-center gap-2'>
          <input
            type='file'
            className='opacity-70 hidden'
            accept='image/*'
            id='file'
          />
          <label htmlFor='file' className='cursor-pointer'>
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        type='submit'
        className='py-1 px-4 mt-2 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-2'
        whileTap={{
          scale: 1,
        }}
        whileHover={{ scale: 1.1 }}>
        Submit
      </motion.button>
    </ProtectedLayout>
  );
}
