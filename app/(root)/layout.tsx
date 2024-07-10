import React from 'react';
import { PropsChildren } from '../types';
import Header from '../components/shared/header/Header';

const layout = ({ children }: PropsChildren) => {
  return (
    <>
      <Header />
      {children}
      <footer>footer</footer>
    </>
  );
};

export default layout;
