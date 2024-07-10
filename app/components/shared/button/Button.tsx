import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'dark' | 'light';
}

const variantStyle = {
  dark: 'text-secondary-darkGrey bg-white hover:bg-secondary-lightPeach hover:text-white',
  light: 'bg-primary-peach text-white hover:bg-secondary-lightPeach',
};

export const Button = ({ variant, ...props }: Props) => (
  <button
    {...props}
    className={`uppercase py-4 px-[18px] rounded-lg cursor-pointer ${variantStyle[variant]} ${props.className}`}
  />
);
