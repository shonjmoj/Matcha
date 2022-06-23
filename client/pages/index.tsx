import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div
      className="text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        animate={{ scale: 1.2 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl"
      >
        Matcha
      </motion.h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas</p> */}
    </motion.div>
  );
};

export default Home;
