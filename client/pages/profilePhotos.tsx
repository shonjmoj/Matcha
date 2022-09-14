import React from "react";
import ProtectedLayout from "../components/Layouts/ProtectedLayout";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import ImageHolder from "../components/ImageHolder";

export default function profilePhotos() {
  return (
    <ProtectedLayout>
      <motion.form
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-4 w-[90%] gap-2 md:gap-4 h-[90%]"
        encType="multipart/form-data"
      >
        <ImageHolder />
        <ImageHolder />
        <ImageHolder />
        <ImageHolder />
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          type="submit"
          className="col-span-2 px-4 py-1 mt-2 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-4 md:col-span-4"
          whileTap={{
            scale: 1,
          }}
          whileHover={{ scale: 1.1 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </ProtectedLayout>
  );
}
