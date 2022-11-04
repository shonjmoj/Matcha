import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outlined';
  HTMLtype?: 'submit' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  disabled,
  HTMLtype,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        type={HTMLtype}
        className={`flex items-center justify-center ${
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:opacity-90 transition-all duration-200'
        } ${
          type === 'secondary' ? 'bg-secondary' : 'bg-primary'
        } px-4 py-2 rounded-lg
         shadow-sm ${
           type === 'secondary' || 'outlined'
             ? 'shadow-secondary/50'
             : 'shadow-primary'
         } outline-none
         ${
           type === 'outlined'
             ? 'bg-outlined text-secondary border border-secondary'
             : ''
         }`}>
        {children}
      </button>
    </>
  );
};

export default Button;
