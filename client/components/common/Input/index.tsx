import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
export interface InputProps {
  value: string;
  label: string;
  type: string;
  placeholder: string;
  onChange?: (e: any) => void;
  error?: string;
}

export default function index({
  label,
  value,
  type,
  placeholder,
  error,
}: InputProps) {
  return (
    <div className='flex flex-col gap-1 text-sm md:text-base w-[80%] md:w-[30%] lg:w-[20%]'>
      <label htmlFor='name' className='ml-1'>
        {label}
      </label>
      <input
        value={value}
        type={type}
        name='email'
        placeholder={placeholder}
        className={`bg-transparent border ${
          error
            ? 'border-2 border-red-600'
            : 'border-border shadow-border/20 focus:shadow-border'
        } rounded-md p-2 md:px-3 shadow-sm 
              outline-none transition-all w-full`}
      />
      <span
        className={`${
          error ? 'text-red-600 text-sm ml-1' : 'hidden'
        } flex items-start gap-1`}>
        <IoWarningOutline />
        {error}
      </span>
    </div>
  );
}
