import React from 'react';
import { motion } from 'framer-motion';

const resendEmail = () => {
  return (
    <motion.div
      className='text-white container w-full sm:w-[30%]'
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}>
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className='text-xl md:text-2xl mb-4 xl:text-4xl font-bold'>
        Retype the email
      </motion.h1>
      <form className='w-full flex flex-col gap-2'>
        <label className='flex flex-col font-semibold'>
          Email
          <input
            type='email'
            className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none'
          />
        </label>
        <motion.button
          type='submit'
          className='p-1 mt-2 transition-all duration-200 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-2'
          whileTap={{
            scale: 1,
          }}
          whileHover={{ scale: 1.1 }}>
          Resend
        </motion.button>
      </form>
    </motion.div>
  );
};

export default resendEmail;
