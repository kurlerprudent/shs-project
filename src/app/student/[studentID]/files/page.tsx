"use client";

import { getStudentSchoolData } from "@/controllers/student";
import { IStudentWithSchoolData } from "@/interfaces/IStudent";
import { IStudentRegistrationFormData } from "@/interfaces/IStudentRegistrationFormData";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";


const StudentSummary = () => {
  const { studentID } = useParams();

  const [studentData, setStudentData] = useState<IStudentWithSchoolData | null>(
    null
  );
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
    }
  };
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">
          Student Registration Summary
        </h1>

        {/* Student Info Section */}
        <div className="space-y-6">
          <div className="text-xl">
            <strong>Student Name:</strong> David Nortey
          </div>
          <div className="text-xl">
            <strong>School Name:</strong> Presbyterian Boys
          </div>
          <div className="text-xl">
            <strong>Parent/Guardian Name:</strong> David Nortey
          </div>
          <div className="text-xl">
            <strong>Parent Occupation:</strong> Farmer
          </div>
          <div className="text-xl">
            <strong>Birth Date:</strong> 22nd July 2024
          </div>
          <div className="text-xl">
            <strong>Address:</strong> Adenta New Legon
          </div>
          <div className="text-xl">
            <strong>Phone Number:</strong> 0547642843
          </div>
          <div className="text-xl">
            <strong>Email:</strong> kwams55@gmail.com
          </div>
        </div>

        {/* PDF Downloads Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Documents</h2>
          <div className="flex flex-col gap-4">
            <a
              href="/path-to-student-document-1.pdf"
              download="student_document_1.pdf"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition text-center"
            >
              Download Admission Letter (PDF)
            </a>
            <a
              href="/path-to-student-document-2.pdf"
              download="student_document_2.pdf"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition text-center"
            >
              Download Prospectus (PDF)
            </a>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link href="/student">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Back to Student Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentSummary;
