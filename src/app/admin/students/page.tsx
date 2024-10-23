"use client";

import { useEffect, useState } from "react";
import { getStudents } from "@/controllers/student";
import { IStudent } from "@/interfaces/IStudent";
import Link from "next/link";

export default function ViewStudentsPage() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [registrationFilter, setRegistrationFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        setErrorMessage("Failed to load students.");
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    const matchesSearchTerm =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.school_id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      registrationFilter === "all" ||
      (registrationFilter === "paid" && student.registration_paid) ||
      (registrationFilter === "unpaid" && !student.registration_paid);

    return matchesSearchTerm && matchesFilter;
  });

  if (loading) {
    return <p className="text-center mt-20">Loading students...</p>;
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
      <h1 className="text-3xl font-bold mb-8">View Students</h1>

      {/* Filter and Search Options */}
      <div className="flex items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name, location, or school"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={registrationFilter}
          onChange={(e) => setRegistrationFilter(e.target.value)}
          className="p-3 border rounded focus:outline-none"
        >
          <option value="all">All</option>
          <option value="paid">Registration Paid</option>
          <option value="unpaid">Registration Unpaid</option>
        </select>

        <Link href="/admin/students/add">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
            Add Student
          </button>
        </Link>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Index Number</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Date of Birth</th>
              <th className="p-4 text-left">Program</th>
              <th className="p-4 text-left">Aggregate</th>
              <th className="p-4 text-left">Residential Status</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Registration Paid</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{student.index_number}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">
                  {new Date(student.dob).toLocaleDateString()}
                </td>
                <td className="p-4">{student.program}</td>
                <td className="p-4">{student.aggregate}</td>
                <td className="p-4">{student.residential_status}</td>
                <td className="p-4">{student.location}</td>
                <td className="p-4">
                  {student.registration_paid ? "Yes" : "No"}
                </td>
                <td className="p-4 flex gap-2">
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                    Remove Admission
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
