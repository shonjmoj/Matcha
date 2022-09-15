import React from "react";
import ProtectedLayout from "../components/Layouts/ProtectedLayout";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import ImageHolder from "../components/ImageHolder";
import { useForm } from "react-hook-form";

export default function ProfilePhotos() {
  type Data = {
    file: File;
  };
  const { register, handleSubmit, watch } = useForm<Data>();
  const onSubmit = async (data: Data) => {
    console.log(data);
  };
  console.log(watch("file"));
  return (
    <ProtectedLayout>
      <motion.form
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-4 w-[90%] gap-2 md:gap-4 h-[90%]"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-center h-48 gap-2 border-2 border-dashed rounded-md md:h-60">
          <input
            type="file"
            className="hidden opacity-70"
            accept="image/*"
            id="file"
            {...register("file")}
          />
          <label htmlFor="file" className="cursor-pointer">
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
        <div className="flex items-center justify-center h-48 gap-2 border-2 border-dashed rounded-md md:h-60">
          <input
            type="file"
            className="hidden opacity-70"
            accept="image/*"
            id="file2"
          />
          <label htmlFor="file" className="cursor-pointer">
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
        <div className="flex items-center justify-center h-48 gap-2 border-2 border-dashed rounded-md md:h-60">
          <input
            type="file"
            className="hidden opacity-70"
            accept="image/*"
            id="file"
          />
          <label htmlFor="file" className="cursor-pointer">
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
        <div className="flex items-center justify-center h-48 gap-2 border-2 border-dashed rounded-md md:h-60">
          <input
            type="file"
            className="hidden opacity-70"
            accept="image/*"
            id="file"
          />
          <label htmlFor="file" className="cursor-pointer">
            Add a photo
          </label>
          <AiOutlinePlus size={25} />
        </div>
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
