<<<<<<< HEAD
import { motion } from 'framer-motion';
import ProtectedLayout from '../components/Layouts/ProtectedLayout';
=======
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ProtectedLayout from "../components/Layouts/ProtectedLayout";
import { ProfileData } from "../types/types";
import Joi from "joi";
import { useCookies } from "react-cookie";
>>>>>>> 24dac8572ad0d5b4cb54dd37cc1273881865c46e

export default function Profilecompletion() {
  const { register, handleSubmit, watch } = useForm<ProfileData>();
  const [cookies, setCookie, removeCookie] = useCookies(["x-access-token"]);
  const schema = Joi.object({
    age: Joi.number().min(18).max(98).required(),
    gender: Joi.string(),
    orientation: Joi.string(),
    interested_in: Joi.string(),
    bio: Joi.string(),
  });
  const onSubmit: SubmitHandler<ProfileData> = async (data) => {
    const { error, value } = schema.validate(data);
    if (!error) {
      try {
        const result = await fetch("http://localhost:3001/api/profilesetup", {
          method: "POST",
          credentials: "include",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(value),
        });
        const res = await result.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ProtectedLayout>
      <div className='md:mt-10 flex flex-col items-center w-full h-full gap-4 lg:justify-start'>
        <motion.div
          className='w-[90%] md:w-[80%] flex flex-col items-center justify-center'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}>
          <h1 className='mb-4 sm:mb-4 text-xl font-semibold md:text-2xl lg:text-3xl lg:mb-8'>
            Complete your profile
          </h1>
<<<<<<< HEAD
          <form className='flex flex-col gap-2 md:gap-4 lg:grid lg:grid-cols-2 lg:w-[40%]'>
            <label className='flex flex-col font-semibold'>
              Age
              <input
                type='number'
                className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'
              />
            </label>
            <label className='flex flex-col font-semibold'>
              Sexe
              <select className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
                <option defaultValue={''} hidden></option>
                <option value='Male' className='bg-soft-pink'>
=======
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 md:gap-4 lg:grid lg:grid-cols-2 lg:w-[40%]"
          >
            <label className="flex flex-col font-semibold">
              Age
              <input
                {...register("age")}
                type="number"
                className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"
              />
            </label>
            <label className="flex flex-col font-semibold">
              Gender
              <select
                {...register("gender")}
                className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"
              >
                <option defaultValue={""} hidden></option>
                <option value="Male" className="bg-soft-pink">
>>>>>>> 24dac8572ad0d5b4cb54dd37cc1273881865c46e
                  Male
                </option>
                <option value='Female' className='bg-soft-pink'>
                  Female
                </option>
                <option value='Other' className='bg-soft-pink'>
                  Other
                </option>
              </select>
            </label>
<<<<<<< HEAD
            <label className='flex flex-col font-semibold'>
              Orientation
              <select className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
                <option defaultValue={''} hidden></option>
                <option value='Straight' className='bg-soft-pink'>
=======
            <label className="flex flex-col font-semibold">
              Oriantation
              <select
                {...register("orientation")}
                className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"
              >
                <option defaultValue={""} hidden></option>
                <option value="Straight" className="bg-soft-pink">
>>>>>>> 24dac8572ad0d5b4cb54dd37cc1273881865c46e
                  Straight
                </option>
                <option value='Bisexual' className='bg-soft-pink'>
                  Bisexual
                </option>
                <option value='Lesbian' className='bg-soft-pink'>
                  Lesbian
                </option>
                <option value='Homosexual' className='bg-soft-pink'>
                  Homosexual
                </option>
              </select>
            </label>
<<<<<<< HEAD
            <label className='flex flex-col font-semibold'>
              Interested in
              <select className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
                <option defaultValue={''} hidden></option>
                <option value='Boys' className='bg-soft-pink'>
=======

            <label className="flex flex-col font-semibold">
              Interested in
              <select
                {...register("interested_in")}
                className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"
              >
                <option defaultValue={""} hidden></option>
                <option value="Boys" className="bg-soft-pink">
>>>>>>> 24dac8572ad0d5b4cb54dd37cc1273881865c46e
                  Boys
                </option>
                <option value='Girls' className='bg-soft-pink'>
                  Girls
                </option>
                <option value='Both' className='bg-soft-pink'>
                  Both
                </option>
              </select>
            </label>
<<<<<<< HEAD
            <label className='flex flex-col col-span-2 font-semibold'>
              Bio
              <textarea className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'></textarea>
=======

            <label className="flex flex-col col-span-2 font-semibold">
              Bio
              <textarea
                {...register("bio")}
                className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"
              ></textarea>
>>>>>>> 24dac8572ad0d5b4cb54dd37cc1273881865c46e
            </label>
            <motion.button
              type='submit'
              className='p-1 mt-2 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-2'
              whileTap={{
                scale: 1,
              }}
              whileHover={{ scale: 1.1 }}>
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </ProtectedLayout>
  );
}
