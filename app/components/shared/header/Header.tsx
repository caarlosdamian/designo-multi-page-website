import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white px-6 py-[34px]">
      <section className="flex items-center justify-between">
        <Image
          width={197}
          height={28}
          alt="logo"
          src="/assets/shared/desktop/logo-dark.png"
        />
        <Image
          width={24}
          height={20}
          alt="logo"
          src="/assets/shared/mobile/icon-hamburger.svg"
        />
      </section>
    </header>
  );
};

export default Header;
