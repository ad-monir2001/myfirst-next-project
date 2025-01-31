'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathName = usePathname();
  if (!pathName.includes('dashboard')) {
    return (
      <nav>
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
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/admin-dashboard">Admin</Link>
          </li>
          <li>
            <Link href="/user-dashboard">User</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
