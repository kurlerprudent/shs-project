"use client";

import { Images } from "@/assets";
import { getSchoolData } from "@/controllers/school";
import { ISchool } from "@/interfaces/ISchool";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const GalleryPage = () => {
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
    return <p className="text-center mt-20">Loading gallery...</p>;
  }

  if (!schoolData) {
    return <p className="text-center mt-20">School not found.</p>;
  }

  const images = [
    Images.presec,
    Images.presec,
    Images.presec,
    Images.presec,
    Images.presec,
    Images.presec,
  ];

  return (
    <div className="min-h-screen bg-[#002b5b] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        {schoolData.name} Gallery
      </h1>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 bg-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={src}
              alt={`School Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Back to School Page Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => history.back()}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Back to School Page
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;
