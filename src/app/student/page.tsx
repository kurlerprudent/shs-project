"use client";

import { getStudentSchoolData } from "@/controllers/student";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnterIndexNumber() {
  const [indexNumber, setIndexNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const router = useRouter();

  const handleSubmit = async () => {
    if (!indexNumber) {
      setErrorMessage("Please enter your index number.");
      return;
    }
    if (indexNumber.length !== 8) {
      setErrorMessage("Invalid index number. It must be exactly 8 characters.");
      return;
    }

    setLoading(true);
    setErrorMessage(null); // Clear any previous error message

    try {
      const data = await getStudentSchoolData({ indexNumber });
      console.log("Student Data:", data);

      // Navigate to the next page with the data as query parameters
      router.push(`/student/${data.id}`);
    } catch (error) {
      console.error("Error fetching student data:", error);
      setErrorMessage("Student not found. No admission yet."); // Set error message
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
          onChange={(e) => setIndexNumber(e.target.value)}
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
