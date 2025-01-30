import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="">
      <ul className="font-semibold flex justify-evenly my-4">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
