<<<<<<< HEAD
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
=======
import { LayoutProps } from "../../types/types";
import HomeLayout from "./HomeLayout";
import React, { FormEventHandler, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import Router from "next/router";
import _ from "lodash";

const ProtectedLayout = ({ children }: LayoutProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["x-access-token"]);
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    if (_.isEmpty(cookies)) setShowChild(true);
  }, []);
>>>>>>> 24dac8572ad0d5b4cb54dd37cc1273881865c46e
  const Logout: FormEventHandler = () => {
    removeCookie('x-access-token');
    Router.push('/login');
  };
  if (showChild) {
    return <HomeLayout>not Logged in</HomeLayout>;
  }
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
