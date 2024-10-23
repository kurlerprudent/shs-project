"use client"

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-[#002b5b] text-white">
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
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/admission" className="hover:text-gray-300">Admission page</Link>
        <Link href="/news" className="hover:text-gray-300">News & Activities</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-[#002b5b] text-white flex flex-col items-center space-y-4 p-4 md:hidden">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/admission" className="hover:text-gray-300">Admission page</Link>
          <Link href="/news" className="hover:text-gray-300">News & Activities</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
