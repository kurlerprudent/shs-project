"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar: FC = () => {
  const router = useRouter();
  const [active, setActive] = useState<string>("Home");

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-screen bg-gray-100 shadow-md w-64">
      <nav className="flex flex-col space-y-6 p-6">
        {/* Home */}
        <button
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            active === "Home" ? "bg-blue-100 text-blue-600" : "text-gray-700"
          }`}
          onClick={() => {
            setActive("Home");
            handleNavigation("/admin");
          }}
        >
          <FaHome size={20} />
          <span>Home</span>
        </button>

        {/* View Students */}
        <button
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            active === "View Students"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700"
          }`}
          onClick={() => {
            setActive("View Students");
            handleNavigation("/admin/students");
          }}
        >
          <FaUsers size={20} />
          <span>View Students</span>
        </button>

        {/* Applied Students */}
        <button
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            active === "Applied Students"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700"
          }`}
          onClick={() => {
            setActive("Applied Students");
            handleNavigation("/admin/applied-students");
          }}
        >
          <FaUsers size={20} />
          <span>Applied Students</span>
        </button>

        {/* Analytics */}
        <button
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            active === "Wallet"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700"
          }`}
          onClick={() => {
            setActive("Analytics");
            handleNavigation("/admin/wallet");
          }}
        >
          <FaChartBar size={20} />
          <span>Wallet</span>
        </button>

        {/* Settings */}
        <button
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            active === "Settings"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700"
          }`}
          onClick={() => {
            setActive("Settings");
            handleNavigation("/admin/settings");
          }}
        >
          <FaCog size={20} />
          <span>Settings</span>
        </button>

        {/* Logout */}
        <button
          className="flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-100 transition"
          onClick={() => {
            // Handle Logout Logic Here
            console.log("Logout clicked");
          }}
        >
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
