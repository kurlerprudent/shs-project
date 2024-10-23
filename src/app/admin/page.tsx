"use client";

import { FC, useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";

const DashboardPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for messages
  const messages = [
    {
      from: "John Doe",
      email: "johndoe@gmail.com",
      message:
        "Registration for the upcoming academic year is now open. Please submit your applications by the end of the month.",
      status: "Edit",
    },
    {
      from: "Jane Smith",
      email: "janesmith@gmail.com",
      message:
        "Placement opportunities for graduates are available. Check the career services office for more details.",
      status: "Edit",
    },
  ];

  const filteredMessages = messages.filter((msg) =>
    msg.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome Mr. John</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex items-center"
          >
            <FaUser size={32} className="mr-4" />
            <div>
              <p className="text-3xl font-bold">10</p>
              <p>Students Placed</p>
            </div>
          </div>
        ))}
      </div>

      {/* Unread Messages */}
      <h2 className="text-2xl font-bold mb-6">Unread Messages</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <FaSearch size={20} className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Messages Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">From</th>
              <th className="p-4 text-left">Contact Email</th>
              <th className="p-4 text-left">Message</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.map((msg, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-4">{msg.from}</td>
                <td className="p-4">{msg.email}</td>
                <td className="p-4">{msg.message}</td>
                <td className="p-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    {msg.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
