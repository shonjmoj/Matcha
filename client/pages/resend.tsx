import React from "react";
import { motion } from "framer-motion";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResendData } from "../types/types";
import HomeLayout from "../components/Layouts/HomeLayout";
const ResendEmail = () => {
  const { register, handleSubmit } = useForm<ResendData>();
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  });
  const onSubmit: SubmitHandler<ResendData> = (data) => {
    const { error, value } = schema.validate(data);
    if (!error) {
    }
  };
  return (
    <HomeLayout>
      <motion.div
        className="text-white container w-full sm:w-[30%]"
        initial={{ x: -600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4 text-xl font-bold md:text-2xl xl:text-4xl text-center md:text-start"
        >
          Retype the email
        </motion.h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2 p-4 md:p-0"
        >
          <label className="flex flex-col font-semibold">
            Email
            <input
              {...register("email", { required: true })}
              type="email"
              className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none"
            />
          </label>
          <motion.button
            type="submit"
            className="p-1 mt-2 transition-all duration-200 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-2"
            whileTap={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}
          >
            Resend
          </motion.button>
        </form>
      </motion.div>
    </HomeLayout>
  );
};

export default ResendEmail;
