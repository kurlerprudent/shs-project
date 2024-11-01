"use client";

import { fetchStudent } from "@/controllers/serverActions"; // Adjust the import based on your file structure
import { IStudentWithSchoolData } from "@/interfaces/IStudent";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegistrationPage = () => {
  const [studentData, setStudentData] = useState<IStudentWithSchoolData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { index_number } = useParams<{ index_number: string }>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchStudent(index_number);
        if (!response) {
          console.log('Error fetching data');
        }

        const data = await response;
        setStudentData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [index_number]);
  const handleNavigation =  (e:string)=>{
   router.push(e)
  }

console.log(index_number)
 
  return (
    <div className="min-h-screen bg-[#002b5b] text-white flex items-center justify-center">
      <div className="w-full max-w-4xl p-10 bg-white text-black rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-8">
        {/* Congratulations Text */}
        <div className="flex-1">
          {studentData ? (
            <>
              <h1 className="text-4xl font-bold mb-4">
                Congratulations, {studentData.name}!
              </h1>
              <p className="text-lg mb-4">
                You have been admitted to <strong>{studentData.school_id}</strong>.
              </p>
              <p className="mb-6">
                Click on the button below to fill your registration form{" "}
                <button
                  onClick={() => handleNavigation(`/student/${index_number}/register`)}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Fill Registration Form
                </button>
              </p>
            </>
          ) : (
            <p>Loading student data...</p>
          )}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <button
            onClick={() => studentData && handleNavigation(`/school/${studentData.school_id}/tour`)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Tour School
          </button>
          <button
            onClick={() => studentData && handleNavigation(`/school/${studentData.school_id}/contact`)}
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Contact School
          </button>
          <button
            onClick={() => studentData && handleNavigation(`/school/${studentData.school_id}/gallery`)}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            School Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
