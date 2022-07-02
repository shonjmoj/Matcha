import { LayoutProps } from "../../types/types";
import HomeLayout from "./HomeLayout";
import React, { FormEventHandler } from "react";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import Router from "next/router";

const ProtectedLayout = ({ children }: LayoutProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["x-access-token"]);
  const Logout: FormEventHandler = () => {
    removeCookie("x-access-token");
    Router.push("/login");
  };
  return (
    <HomeLayout>
      <div className="flex flex-col items-center w-full h-full gap-4 lg:justify-start">
        <motion.div
          className="h-max my-2 lg:my-4 lg:w-[80%] lg:flex lg:items-center lg:justify-between"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ delay: 0.2 }}
            className="my-2 text-2xl font-bold md:text-2xl lg:text-3xl"
          >
            Matcha
          </motion.h1>
          <div className="hidden font-semibold lg:m-4 lg:block">
            <motion.button onClick={Logout}>Log out</motion.button>
          </div>
        </motion.div>
        {children}
      </div>
    </HomeLayout>
  );
};
export default ProtectedLayout;
