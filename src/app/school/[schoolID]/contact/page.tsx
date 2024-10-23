"use client";

import { Images } from "@/assets";
import { getSchoolData } from "@/controllers/school";
import { ISchool } from "@/interfaces/ISchool";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ContactSchoolPage = () => {
  const [schoolData, setSchoolData] = useState<ISchool | null>(null);
  const [loading, setLoading] = useState(true);
  const { schoolID } = useParams();

  useEffect(() => {
    if (schoolID) {
      fetchSchoolData(schoolID as string);
    }
  }, [schoolID]);

  const fetchSchoolData = async (id: string) => {
    try {
      const data = await getSchoolData(id);
      setSchoolData(data);
      console.log("School data fetched successfully", data);
    } catch (error) {
      console.error("Error fetching school data:", error);
      alert("Failed to retrieve school data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading school details...</p>;
  }

  if (!schoolData) {
    return <p className="text-center mt-20">School not found.</p>;
  }

  return (
    <div className="min-h-screen bg-[#002b5b] flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Column: School Logo */}
        <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-100">
          <Image
            src={Images.presec} // Replace with actual logo or image
            alt={`${schoolData.name} Logo`}
            height={300}
            width={300}
            className="object-contain"
          />
        </div>

        {/* Right Column: Contact Details */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            Contact {schoolData.name}
          </h1>

          <div className="space-y-4">
            <p className="text-xl">
              <strong>School Name:</strong> {schoolData.name}
            </p>
            <p className="text-xl">
              <strong>Email:</strong> {schoolData.email}
            </p>
            <p className="text-xl">
              <strong>Phone Number:</strong> {schoolData.phone_number}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href={`tel:${schoolData.phone_number}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Call School
            </a>
            <a
              href={`mailto:${schoolData.email}`}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSchoolPage;
