import React, { FormEventHandler, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useCookies } from "react-cookie";
import Router from "next/router";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["x-access-token"]);
  const Logout: FormEventHandler = () => {
    removeCookie("x-access-token");
    Router.push("/login");
  };
  return (
    <motion.div
      className="fixed top-0 w-full py-2 md:py-3"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.9 }}
    >
      <div className="md:flex items-center justify-between md:px-6 px-3">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.2 }}
          className="ml-8 sm:ml-10 md:ml-12 text-2xl font-bold md:text-2xl lg:text-3xl"
        >
          Matcha
        </motion.h1>
        <div
          className="absolute right-5 top-3 cursor-pointer md:hidden"
          onClick={() => setIsClicked(!isClicked)}
        >
          {isClicked ? <IoMdClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <ul
          className={`md:flex md:bg-transparent bg-gradient-to-br from-pink via-soft-pink border-b-2 rounded-sm shadow-lg
           to-pink md:flex-row md:gap-4 md:items-center flex flex-col border-pink 
           items-center gap-8 md:py-0 md:border-none md:shadow-none
        py-6 absolute left-0 md:static bg-pink w-full md:w-auto ${
          isClicked ? "top-12 opacity-100" : "top-[-490px]"
        } opacity-0 md:opacity-100 transition-all duration-300 ease-in text-xl md:text-lg`}
        >
          <li className="cursor-pointer hover:underline hover:scale-105 hover:translate-y-1 transition-all duration-300">
            Profile
          </li>
          <li className="cursor-pointer hover:underline hover:scale-105 hover:translate-y-1 transition-all duration-300">
            Settings
          </li>
          <li
            className="cursor-pointer hover:underline hover:scale-105 hover:translate-y-1 transition-all duration-300"
            onClick={Logout}
          >
            Log out
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
