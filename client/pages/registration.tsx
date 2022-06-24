import React from "react";
import { motion } from "framer-motion";

export default function registration() {
  return (
    <motion.div
      className="text-white container w-full sm:w-[30%]"
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-2xl lg:text-5xl text-center mb-8 lg:mb-12 font-semibold mx-4"
      >
        Get noticed for who you are, not what you look like.
      </motion.h1>
      <form className="grid lg:grid-cols-2 justify-center items-center gap-3">
        <label className="flex flex-col">
          First name
          <input
            type="text"
            className="bg-transparent border-[1px] p-1 lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col">
          Last name
          <input
            type="text"
            className="bg-transparent border-[1px] p-1 lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col lg:col-span-2">
          Username
          <input
            type="text"
            className="bg-transparent border-[1px] p-1 lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col lg:col-span-2">
          email
          <input
            type="email"
            className="bg-transparent border-[1px] p-1 lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col lg:col-span-2">
          Password
          <input
            type="password"
            className="bg-transparent border-[1px] p-1 lg:p-2 outline-none"
          />
        </label>
        <motion.button
          className="mt-2 border-2 p-1 lg:p-2 shadow-xs hover:shadow-sm hover:shadow-white transition-all duration-200 shadow-white/50 lg:col-span-2"
          whileTap={{ scale: 0.9 }}
        >
          Register
        </motion.button>
      </form>
    </motion.div>
  );
}
