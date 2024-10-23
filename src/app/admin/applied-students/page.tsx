"use client";

import { useEffect, useState } from "react";
import { getRegistrations } from "@/controllers/registration";
import { IRegistration } from "@/interfaces/IRegistration";

export default function ViewRegistrationsPage() {
  const [registrations, setRegistrations] = useState<IRegistration[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const data = await getRegistrations(true); // Fetch only students applying
        setRegistrations(data);
      } catch (error) {
        setErrorMessage("Failed to load registrations.");
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(
    (registration) =>
      registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.jhs_coming_from
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleAccept = (id: string) => {
    console.log(`Accepted registration with ID: ${id}`);
    // Add your logic here to handle acceptance
  };

  const handleDeny = (id: string) => {
    console.log(`Denied registration with ID: ${id}`);
    // Add your logic here to handle denial
  };

  if (loading) {
    return <p className="text-center mt-20">Loading registrations...</p>;
  }

  if (errorMessage) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded mt-8 text-center">
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Students</h1>
      <p className="text-lg text-gray-600 mb-8">
        Students that have applied to the school
      </p>

      {/* Filter and Search Options */}
      <div className="flex items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name, location, or JHS"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Registrations Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Date of Birth</th>
              <th className="p-4 text-left">Parent Name</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Aggregate</th>
              <th className="p-4 text-left">JHS</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRegistrations.map((registration) => (
              <tr key={registration.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{registration.name}</td>
                <td className="p-4">
                  {new Date(registration.dob).toLocaleDateString()}
                </td>
                <td className="p-4">{registration.parent_name}</td>
                <td className="p-4">{registration.contact}</td>
                <td className="p-4">{registration.email || "N/A"}</td>
                <td className="p-4">{registration.aggregate}</td>
                <td className="p-4">{registration.jhs_coming_from}</td>
                <td className="p-4">{registration.location}</td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleAccept(registration.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDeny(registration.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
