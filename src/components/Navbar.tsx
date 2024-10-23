"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative flex justify-between items-center p-6 bg-[#002b5b] text-white">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <Image
          src={Images.coat_of_arms}
          alt="SHS Web Logo"
          width={48}
          height={48}
          className="h-12 w-12"
        />
        <span className="text-2xl font-bold">SHS WEB</span>
      </div>

      {/* Links for Desktop View */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/students" className="hover:text-gray-300">
          Admission Page
        </Link>
        {/* <Link href="/news" className="hover:text-gray-300">
          News & Activities
        </Link> */}
      </div>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 right-0 w-full bg-[#002b5b] text-white flex flex-col items-center space-y-6 p-6 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          href="/students"
          onClick={() => setMenuOpen(false)}
          className="hover:text-gray-300"
        >
          Admission Page
        </Link>
        {/* <Link
          href="/news"
          onClick={() => setMenuOpen(false)}
          className="hover:text-gray-300"
        >
          News & Activities
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
