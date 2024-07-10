'use client';
import Image from 'next/image';
import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  inputField: string;
  errorMessage: string;
}

export const Input = ({
  errorMessage,
  register,
  inputField,
  ...props
}: Props) => {
  return (
    <div className="border-b py-3 px-4 flex items-center justify-between focus-within:border-b-[3px]">
      <input
        type="text"
        className="text-[15px] text-white font-medium leading-[36px] outline-none bg-transparent placeholder:text-white placeholder:opacity-50"
        {...register(inputField)}
        {...props}
      />
      {errorMessage && (
        <em className="text-xs italic font-normal leading-[36px] text-white flex items-center gap-2">
          {errorMessage}
          <Image
            src="/assets/contact/desktop/icon-error.svg"
            width={20}
            height={20}
            alt="wrning"
          />
        </em>
      )}
    </div>
  );
};
