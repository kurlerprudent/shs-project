"use client";

import { useState } from "react";

interface SchoolDetails {
  name: string;
  location: string;
  registrationFee: number;
  logo: File | null;
  images: FileList | null;
  description: string;
  motto: string;
  website: string;
}

export default function SettingsPage() {
  const [schoolDetails, setSchoolDetails] = useState<SchoolDetails>({
    name: "",
    location: "",
    registrationFee: 0,
    logo: null,
    images: null,
    description: "",
    motto: "",
    website: "",
  });

  const [previewLogo, setPreviewLogo] = useState<string | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSchoolDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSchoolDetails((prev) => ({ ...prev, logo: file }));
      setPreviewLogo(URL.createObjectURL(file));
    }
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSchoolDetails((prev) => ({ ...prev, images: e.target.files }));
      const previews = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(previews);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("School Details:", schoolDetails);
    alert("School details updated successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="w-full max-w-3xl text-black px-8 py-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-10">
          School Settings
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* School Name */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">School Name:</label>
            <input
              type="text"
              name="name"
              value={schoolDetails.name}
              onChange={handleInputChange}
              className="col-span-2 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">Location:</label>
            <input
              type="text"
              name="location"
              value={schoolDetails.location}
              onChange={handleInputChange}
              className="col-span-2 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Registration Fee */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">
              Registration Fee (GHS):
            </label>
            <input
              type="number"
              name="registrationFee"
              value={schoolDetails.registrationFee}
              onChange={handleInputChange}
              className="col-span-2 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Motto */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">Motto:</label>
            <input
              type="text"
              name="motto"
              value={schoolDetails.motto}
              onChange={handleInputChange}
              className="col-span-2 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Website Link */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">Website:</label>
            <input
              type="url"
              name="website"
              value={schoolDetails.website}
              onChange={handleInputChange}
              className="col-span-2 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">About (Description):</label>
            <textarea
              name="description"
              value={schoolDetails.description}
              onChange={handleInputChange}
              rows={4}
              className="col-span-2 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* School Logo */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">School Logo:</label>
            <div className="col-span-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="w-full p-2 border rounded focus:outline-none"
              />
              {previewLogo && (
                <div className="mt-4">
                  <img
                    src={previewLogo}
                    alt="School Logo Preview"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* School Images */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-lg font-medium">School Images:</label>
            <div className="col-span-2">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImagesChange}
                className="w-full p-2 border rounded focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                {previewImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`School Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-10 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
