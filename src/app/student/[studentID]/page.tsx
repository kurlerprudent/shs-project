"use client";

import { getStudentSchoolData } from "@/controllers/student";
import { IStudentWithSchoolData } from "@/interfaces/IStudent";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegistrationPage = () => {
  const [studentData, setStudentData] = useState<IStudentWithSchoolData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { studentID } = useParams();

  useEffect(() => {
    if (studentID) {
      fetchStudentData(studentID as string);
    }
  }, [studentID]);

  const fetchStudentData = async (id: string) => {
    try {
      const data = await getStudentSchoolData({ id });
      setStudentData(data);
      console.log("Student data fetched successfully");
    } catch (error) {
      console.error("Error fetching student data:", error);
      alert("Failed to retrieve student data.");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  if (loading) {
    return <p className="text-center mt-20">Loading student details...</p>;
  }

  if (!studentData) {
    return <p className="text-center mt-20">Student not found.</p>;
  }

  return (
    <div className="min-h-screen bg-[#002b5b] text-white flex items-center justify-center">
      <div className="w-full max-w-4xl p-10 bg-white text-black rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-8">
        {/* Congratulations Text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Congratulations, {studentData.name}!
          </h1>
          <p className="text-lg mb-4">
            You have been admitted to <strong>{studentData.school_name}</strong>
            .
          </p>
          <p className="mb-6">
            Click on the button below to fill your registration form{" "}
            <button
              onClick={() => handleNavigation(`/student/${studentID}/register`)}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Fill Registration Form
            </button>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <button
            onClick={() =>
              handleNavigation(`/school/${studentData.school_id}/tour`)
            }
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Tour School
          </button>
          <button
            onClick={() =>
              handleNavigation(`/school/${studentData.school_id}/contact`)
            }
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Contact School
          </button>
          <button
            onClick={() =>
              handleNavigation(`/school/${studentData.school_id}/gallery`)
            }
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Gallery of School
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
