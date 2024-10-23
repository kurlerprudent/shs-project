"use client";

import {
  ICreateStudent,
  IStudent,
  ResidentialStatusEnum,
} from "@/interfaces/IStudent";
import { ChangeEvent, FormEvent, useState } from "react";
import * as XLSX from "xlsx";

export default function AddStudentsPage() {
  const [studentData, setStudentData] = useState<ICreateStudent>({
    index_number: "",
    name: "",
    dob: new Date(),
    school_id: "",
    location: "",
    aggregate: 0,
    registration_paid: false,
    gender: "Male", // Default gender
    program: "General Arts", // Default program
    residential_status: ResidentialStatusEnum.DAY, // Default status
  });

  const [bulkData, setBulkData] = useState<IStudent[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Manually Added Student:", studentData);
    alert("Student added successfully!");
    // Add logic to send student data to your backend
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: IStudent[] = XLSX.utils.sheet_to_json(sheet);

      setBulkData(parsedData);
      console.log("Bulk Data:", parsedData);
      alert("File uploaded and parsed successfully!");
    };

    fileReader.onerror = () => {
      setFileError("Failed to read the file. Please try again.");
    };

    fileReader.readAsArrayBuffer(file);
  };

  const handleBulkUpload = () => {
    console.log("Bulk Upload Data:", bulkData);
    alert("Bulk students data uploaded successfully!");
    // Add logic to send bulkData to your backend
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Add Students</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Manual Student Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Add Student Manually</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              name="index_number"
              placeholder="Index Number"
              value={studentData.index_number}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={studentData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            />
            <input
              type="date"
              name="dob"
              value={studentData.dob.toISOString().slice(0, 10)}
              onChange={(e) =>
                setStudentData({
                  ...studentData,
                  dob: new Date(e.target.value),
                })
              }
              className="w-full p-3 border rounded focus:outline-none"
              required
            />
            <input
              type="number"
              name="aggregate"
              value={studentData.aggregate}
              onChange={(e) =>
                setStudentData({
                  ...studentData,
                  aggregate: parseInt(e.target.value),
                })
              }
              className="w-full p-3 border rounded focus:outline-none"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={studentData.location}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            />
            <select
              name="gender"
              value={studentData.gender}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              name="program"
              value={studentData.program}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            >
              <option value="General Arts">General Arts</option>
              <option value="Science">Science</option>
              <option value="Business">Business</option>
            </select>
            <select
              name="residential_status"
              value={studentData.residential_status}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            >
              <option value={ResidentialStatusEnum.DAY}>Day</option>
              <option value={ResidentialStatusEnum.BOARDING}>Boarding</option>
            </select>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="registration_paid"
                checked={studentData.registration_paid}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    registration_paid: e.target.checked,
                  })
                }
              />
              Registration Paid
            </label>

            <select
              name="school_id"
              value={studentData.school_id}
              onChange={handleInputChange}
              className="w-full p-3 border rounded focus:outline-none"
              required
            >
              <option value="">Select School</option>
              <option value="school1">School 1</option>
              <option value="school2">School 2</option>
            </select>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              Add Student
            </button>
          </form>
        </div>

        {/* Bulk Upload Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Upload Students in Bulk
          </h2>
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            onChange={handleFileUpload}
            className="w-full p-3 border rounded focus:outline-none"
          />
          {fileError && <div className="text-red-500 mt-2">{fileError}</div>}

          {bulkData.length > 0 && (
            <button
              onClick={handleBulkUpload}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Upload Students
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
