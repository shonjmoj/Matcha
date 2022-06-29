import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Joi from "joi";
import { LoginData } from "../types/types";
import { setMessage } from "./redux/RegistrationState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import cookies from "cookies";
import Modal from "../components/Modal";

export default function Login() {
  const { register, handleSubmit } = useForm<LoginData>();
  const { state } = useSelector((data: RootState) => data.register);
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const { error, value } = schema.validate(data);
    if (!error) {
      const result = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      if (result.status === 409) {
        const res = await result.json();
        // error on res.error (user doesn't exist)
        dispatch(setMessage(res.error));
      } else if (result.status === 401) {
        const res = await result.json();
        // error on res.error (user not verified)
        dispatch(setMessage(res.error));
      } else if (result.status === 408) {
        const res = await result.json();
        // invalid email / password => message on res.error
        dispatch(setMessage(res.error));
      } else {
        const res = await result.json();
        document.cookie = `x-access-token=${res.data}`;
      }
    }
    setErr(true);
  };
  return (
    <motion.div
      className="text-white container w-full sm:w-[50%]"
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Modal title="Registration successful" content={state} />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-8 text-2xl font-semibold text-center xl:text-4xl xl:mb-12"
      >
        It is never too late <br /> to fall in love
      </motion.h1>
      {err && state !== "pending" && (
        <p className="mb-4 font-semibold text-center">{state}</p>
      )}
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col font-semibold">
          Username / Email
          <input
            type="text"
            {...register("email", { required: true })}
            className="bg-transparent border-white font-normal border-[1px] outline-none p-2"
          />
        </label>
        <label className="flex flex-col font-semibold">
          Password
          <input
            type="password"
            {...register("password", { required: true })}
            className="bg-transparent border-white font-normal border-[1px] outline-none p-2"
          />
        </label>
        <span className="text-sm font-light lg:text-md">
          You are new here ?{" "}
          <span className="underline">
            <Link href="/registration">Create an account</Link>
          </span>
        </span>
        <motion.button
          type="submit"
          className="px-20 py-2 mt-2 transition-all duration-200 border-2 shadow-xs hover:shadow-sm hover:shadow-white shadow-white/50"
          whileTap={{
            scale: 1,
          }}
          whileHover={{ scale: 1.1 }}
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  );
}
