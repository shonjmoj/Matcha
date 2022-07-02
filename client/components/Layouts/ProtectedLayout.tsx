import { LayoutProps } from '../../types/types';
import HomeLayout from './HomeLayout';
import React, { FormEventHandler, useState } from 'react';
import { motion } from 'framer-motion';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import Navbar from '../Navbar';

const ProtectedLayout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['x-access-token']);
  const Logout: FormEventHandler = () => {
    removeCookie('x-access-token');
    Router.push('/login');
  };
  return (
    <HomeLayout>
      <div className='flex flex-col items-center w-full h-full gap-4 lg:justify-start'>
        <Navbar />
        {children}
      </div>
    </HomeLayout>
  );
};
export default ProtectedLayout;
