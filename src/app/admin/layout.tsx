"use client";

import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import { FC, useState } from "react";

const AdminLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 bg-gray-100 shadow-lg">
          <AdminSidebar />
        </div>
      )}

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="p-8 bg-gray-50 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
