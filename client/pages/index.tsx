import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { TiHeartFullOutline } from "react-icons/ti";
import Link from "next/link";
import Mode from "../components/Mode";

const Home: NextPage = () => {
  return (
    <motion.div className="text-white flex flex-col items-center w-full">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ delay: 0.5 }}
        className="text-5xl md:text-6xl lg:text-7xl font-semibold"
      >
        Matcha
      </motion.h1>
      <motion.p
        className="text-center leading-relaxed md:text-lg lg:text-xl mt-6 w-[80%] lg:w-[60%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ delay: 0.2 }}
      >
        You are more than just a photo. You have stories to tell, and passions
        to share, and things to talk about that are more interesting than the
        weather.Because you deserve what dating deserves: better.
      </motion.p>
      <motion.button
        className="py-2 px-3 mt-8 text-sm lg:text-lg border-white border-2 shadow-xs hover:shadow-sm hover:shadow-white transition-shadow duration-200 shadow-white/50"
        initial={{ x: -600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Link href="/login">FIND A MATCH</Link>
      </motion.button>
    </motion.div>
  );
};

export default Home;
