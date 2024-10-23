"use client";

import { Images } from "@/assets";
import { getSchoolData } from "@/controllers/school";
import { ISchool } from "@/interfaces/ISchool";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TourSchoolPage = () => {
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
    return <p className="text-center mt-20">Loading school tour...</p>;
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
            src={Images.presec} // Replace with actual school logo or image
            alt={`${schoolData.name} Logo`}
            height={300}
            width={300}
            className="object-contain"
          />
        </div>

        {/* Right Column: Virtual Tour */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            Tour {schoolData.name}
          </h1>

          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127051.14939024272!2d-0.3205294566405922!3d5.662649999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c9387828afd%3A0xb5b8ce8649131f39!2sPresbyterian%20Boys&#39;%20Secondary%20School!5e0!3m2!1sen!2sgh!4v1729677423369!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Virtual Tour"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSchoolPage;
