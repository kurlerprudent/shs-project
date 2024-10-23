"use client";
import { Images } from "@/assets";
import { Close } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center p-6 bg-[#002b5b] text-white">
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
      <div className="hidden md:flex space-x-8 ">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/admission" className="hover:text-gray-300">Admission page</Link>
        <Link href="/news" className="hover:text-gray-300">News & Activities</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ?
            <Close/>:
            <MenuIcon/>
            }
        </button>
      </div>
      <div
        className={`absolute top-16 right-0 w-full bg-[#002b5b] text-white flex flex-col items-center space-y-4 p-4 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/admission" className="hover:text-gray-300">Admission page</Link>
        <Link href="/news" className="hover:text-gray-300">News & Activities</Link>
      </div>
    </nav>
  );
};

export default Navbar;
