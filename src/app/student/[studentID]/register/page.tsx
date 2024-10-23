"use client";

import PaymentForm from "@/components/PaymentForm";
import StudentForm from "@/components/StudentForm";
import { getStudentSchoolData } from "@/controllers/student";
import { IStudentWithSchoolData } from "@/interfaces/IStudent";
import { IStudentRegistrationFormData } from "@/interfaces/IStudentRegistrationFormData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegistrationForm() {
  const router = useRouter();
  const { studentID } = useParams();

  const [activeTab, setActiveTab] = useState<"form" | "payment">("form");
  const [studentData, setStudentData] = useState<IStudentWithSchoolData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState<IStudentRegistrationFormData>({
    parent_name: "",
    birth_date: "",
    parent_occupation: "",
    address: "",
    phone_number: "",
    email: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab("payment");
  };

  const handlePaymentSubmit = (success: boolean) => {
    if (success) {
      alert("Payment successful!");
      router.push("/student/confirmation");
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading student details...</p>;
  }

  if (!studentData) {
    return <p className="text-center mt-20">Student not found.</p>;
  }

  return (
    <div className="min-h-screen bg-blue-600 text-white flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white text-black rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Congratulations, {studentData.name}!
        </h1>
        <p className="text-lg text-center mb-4">
          You have been admitted to <strong>{studentData.school_name}</strong>.
        </p>

        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l ${
              activeTab === "form"
                ? "bg-blue-700 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setActiveTab("form")}
          >
            Form
          </button>
          <button
            className={`px-4 py-2 rounded-r ${
              activeTab === "payment"
                ? "bg-blue-700 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Payment
          </button>
        </div>

        {activeTab === "form" ? (
          <StudentForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        ) : (
          <PaymentForm
            formData={formData}
            studentData={studentData}
            handlePaymentSubmit={handlePaymentSubmit}
          />
        )}
      </div>
    </div>
  );
}
