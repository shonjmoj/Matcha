import React from 'react';

export interface ButtonProps {
  text: string;
  HTMLtype?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
}

const Button = ({ text, disabled, HTMLtype }: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        type={HTMLtype}
        className={`flex items-center justify-center ${
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:opacity-90 transition-all duration-200'
        } bg-main px-4 py-2 rounded-lg font-semibold
         shadow-md shadow-main/70 outline-none focus:shadow-lg focus:shadow-main/70`}>
        {text}
      </button>
    </>
  );
};

export default Button;
