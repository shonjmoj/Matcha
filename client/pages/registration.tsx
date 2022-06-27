import React from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import Joi from "joi";
import { RegistrationData } from "../types/types";

export default function Registration() {
  const { register, handleSubmit } = useForm<RegistrationData>();
  const schema = Joi.object({
    firstname: Joi.string().pattern(new RegExp("^[A-Z][a-z]{5,10}")).required(),
    lastname: Joi.string().pattern(new RegExp("^[A-Z][a-z]{5,10}")).required(),
    username: Joi.string().alphanum().min(5).max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
  });
  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    const { error, value } = schema.validate(data);
    if (!error) {
      const result = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const res = await result.json();
      console.log(res);
    }
  };
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
        className="mx-2 mb-4 text-2xl font-semibold text-center xl:text-4xl xl:mb-8"
      >
        Get noticed for who you are, not what you look like.
      </motion.h1>
      <form
        className="grid items-center justify-center gap-3 lg:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col font-semibold">
          First name
          <input
            type="text"
            {...register("firstname", { required: true })}
            className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col font-semibold">
          Last name
          <input
            type="text"
            {...register("lastname", { required: true })}
            className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col font-semibold lg:col-span-2">
          Username
          <input
            type="text"
            {...register("username", { required: true })}
            className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col font-semibold lg:col-span-2">
          Email
          <input
            type="email"
            {...register("email", { required: true })}
            className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col font-semibold">
          Password
          <input
            type="password"
            {...register("password", { required: true })}
            className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none"
          />
        </label>
        <label className="flex flex-col font-semibold">
          Confirm Password
          <input
            type="password"
            {...register("repeat_password")}
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
          Register
        </motion.button>
      </form>
    </motion.div>
  );
}
