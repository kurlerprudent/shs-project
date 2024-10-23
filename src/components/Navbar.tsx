// components/Navbar.tsx

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
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
      <div className="flex space-x-8">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/admission" className="hover:text-gray-300">
          Admission page
    </Link>
        <Link href="/news" className="hover:text-gray-300">
          News & Activities
        </Link>
      </div>
    </nav>
);
};

export default Navbar;
