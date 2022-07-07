import { motion } from 'framer-motion';
import React, { MouseEventHandler, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ProtectedLayout from '../components/Layouts/ProtectedLayout';
import { ProfileData } from '../types/types';
import Joi from 'joi';
import { useCookies } from 'react-cookie';
import { interests } from '../components/utils/interests';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import InterestBtn from '../components/InterestBtn';

export default function Profilecompletion() {
  const [toggle, setToggle] = useState<boolean>(true);
  const state = useSelector((data: RootState) => data.interests);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<ProfileData>();
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
        value.interests = state;
        const result = await fetch('http://localhost:3001/api/profilesetup', {
          method: 'POST',
          credentials: 'include',

          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
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
  console.log(state);
  return (
    <ProtectedLayout>
      <div className='!mt-16 md:!mt-20 d my-4 md:my-6 flex flex-col items-center w-full h-full gap-4 lg:justify-start'>
        <motion.div
          className='w-[90%] md:w-[80%] flex flex-col items-center justify-center'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}>
          <h1 className='mb-4 text-xl font-semibold md:text-2xl lg:text-3xl lg:mb-8'>
            Complete your profile
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-2 md:gap-4 lg:grid lg:grid-cols-2 lg:w-[40%]'>
            <label className='flex flex-col font-semibold'>
              Age
              <input
                {...register('age')}
                type='number'
                className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'
              />
            </label>
            <label className='flex flex-col font-semibold'>
              Gender
              <select
                {...register('gender')}
                className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
                <option defaultValue={''} hidden></option>
                <option value='Male' className='bg-soft-pink'>
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
            <label className='flex flex-col font-semibold'>
              Oriantation
              <select
                {...register('orientation')}
                className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
                <option defaultValue={''} hidden></option>
                <option value='Straight' className='bg-soft-pink'>
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
            <label className='flex flex-col font-semibold'>
              Interested in
              <select
                {...register('interested_in')}
                className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'>
                <option defaultValue={''} hidden></option>
                <option value='Boys' className='bg-soft-pink'>
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
            <div className='flex flex-col font-semibold col-span-2'>
              Interests
              <ul className='overflow-y-scroll scrollbar text-xs lg:text-sm font-light border-[1px] max-w-md h-24 md:h-32 items-start justify-start flex flex-wrap gap-2 p-2 lg:p-3'>
                {interests.map((interest) => (
                  <InterestBtn key={interest} title={interest} />
                ))}
              </ul>
            </div>

            <label className='flex flex-col col-span-2 font-semibold'>
              Bio
              <textarea
                {...register('bio')}
                className='bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none'></textarea>
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
