import React from 'react';
import ProtectedLayout from '../components/Layouts/ProtectedLayout';
import { motion } from 'framer-motion';
import { FiEdit3 } from 'react-icons/fi';

export default function settings() {
  return (
    <ProtectedLayout>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className='flex flex-col h-full w-[80%] md:w-[50%] items-center'>
        <motion.h1 className='text-xl sm:text-2xl lg:text-4xl mb-2 md:mb-4 font-bold'>
          Settings
        </motion.h1>
        <motion.div className='my-2 md:my-4 flex flex-col w-[90%] md:w-[60%]'>
          <button className='flex justify-around items-center p-2'>
            <h2>Edit profile</h2>
            <FiEdit3 size={22} />
          </button>
        </motion.div>
      </motion.div>
    </ProtectedLayout>
  );
}
