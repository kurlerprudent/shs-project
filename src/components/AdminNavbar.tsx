"use client";

import { Images } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { FaBars } from "react-icons/fa";

interface AdminNavbarProps {
  toggleSidebar: () => void;
}

const AdminNavbar: FC<AdminNavbarProps> = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Menu Icon and Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          <FaBars size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <Image
            src={Images.coat_of_arms}
            alt="SHS WEB Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-gray-700">SHS WEB</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6"></div>
    </div>
  );
};

export default AdminNavbar;
