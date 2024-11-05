"use client";
import { fetchStudents } from "@/controllers/serverActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default async function EnterIndexNumber() {
  const [indexNumber, setIndexNumber] = useState<string>(""); // Keep this as a string
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const studentData = await fetchStudents();
      console.log("Fetched student data:", studentData); // Log the fetched data

      // Assuming studentData is an array of student objects
      const students = Array.isArray(studentData) ? studentData : [];

      // Find the student by index number
      const student = students.find((student: { index_number: string }) => student.index_number === indexNumber);

      if (student) {
        router.push(`/student/${student.index_number}`);
      } else {
        setErrorMessage("Index number not found");
      }

      console.log("Student ID found:", student?.id); // Log the found student ID

    } catch (error) {
      console.error("Error fetching student data:", error);
      setErrorMessage("An error occurred while fetching student data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#002b5b] text-white flex items-center justify-center">
      <div className="flex flex-col w-full max-w-2xl p-16">
        <h1 className="text-6xl font-extrabold text-yellow-500 drop-shadow-lg">
          School Placement
        </h1>
        <p className="mt-12 text-3xl max-w-3xl leading-relaxed">
          Enter your index number to check if you have been admitted to a
          school.
        </p>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
            {errorMessage}
          </div>
        )}
        <input
          type="text"
          placeholder="Enter your index number"
          value={indexNumber}
          onChange={(e) => setIndexNumber(e.target.value)} // Keep as string
          className="w-full p-4 border text-black rounded mb-6 focus:outline-none focus:ring-4 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
