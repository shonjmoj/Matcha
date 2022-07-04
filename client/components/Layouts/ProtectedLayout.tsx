import { LayoutProps } from "../../types/types";
import HomeLayout from "./HomeLayout";
import React, { FormEventHandler, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import Router from "next/router";
import Navbar from "../Navbar";
import _ from "lodash";
import NotLoggedIn from "../NotLoggedIn";

const ProtectedLayout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["x-access-token"]);
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    if (_.isEmpty(cookies)) setShowChild(true);
  }, [cookies]);

  if (showChild) {
    return (
      <HomeLayout>
        <div className="flex items-center max-w-5xl md:max-w-7xl mx-auto justify-center flex-wrap p-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: [-500, 0], opacity: 1 }}
            transition={{ duration: 2 }}
            className="font-semibold text-3xl md:w-1/2 mb-4 leading-10 tracking-wide"
          >
            You’re not logged in, please log in or register if you don’t have an
            account
          </motion.h1>
          <NotLoggedIn />
        </div>
      </HomeLayout>
    );
  }
  return (
    <HomeLayout>
      <div className="flex flex-col items-center w-full h-full gap-4 lg:justify-start">
        <Navbar />
        {children}
      </div>
    </HomeLayout>
  );
};
export default ProtectedLayout;
