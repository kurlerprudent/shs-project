"use client";

import { IStudentRegistrationFormData } from "@/interfaces/IStudentRegistrationFormData";
import { FC, useEffect, useState } from "react";

interface FormProps {
  formData: IStudentRegistrationFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

const StudentForm: FC<FormProps> = ({
  formData,
  handleInputChange,
  handleFormSubmit,
}) => {
  const [errors, setErrors] = useState<Partial<IStudentRegistrationFormData>>(
    {}
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "parent_name":
        if (!value) error = "Parent/Guardian Name is required.";
        break;
      case "birth_date":
        if (!value) error = "Birth Date is required.";
        break;
      case "parent_occupation":
        if (!value) error = "Parent/Guardian Occupation is required.";
        break;
      case "address":
        if (!value) error = "Address is required.";
        break;
      case "phone_number":
        if (!value || !/^\d{10}$/.test(value)) {
          error = "Phone Number must be exactly 10 digits.";
        }
        break;
      case "email":
        if (!value || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = "Invalid Email address.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  useEffect(() => {
    // Check if the form is valid (no errors and all fields filled)
    const noErrors = Object.values(errors).every((error) => !error);
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setIsFormValid(noErrors && allFieldsFilled);
  }, [errors, formData]);

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="parent_name"
          placeholder="Parent/Guardian Name"
          value={formData.parent_name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-3 border rounded focus:outline-none"
        />
        {errors.parent_name && (
          <p className="text-red-600 text-sm mt-1">{errors.parent_name}</p>
        )}
      </div>

      <div>
        <input
          type="date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-3 border rounded focus:outline-none"
        />
        {errors.birth_date && (
          <p className="text-red-600 text-sm mt-1">{errors.birth_date}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="parent_occupation"
          placeholder="Parent/Guardian Occupation"
          value={formData.parent_occupation}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-3 border rounded focus:outline-none"
        />
        {errors.parent_occupation && (
          <p className="text-red-600 text-sm mt-1">
            {errors.parent_occupation}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-3 border rounded focus:outline-none"
        />
        {errors.address && (
          <p className="text-red-600 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-3 border rounded focus:outline-none"
        />
        {errors.phone_number && (
          <p className="text-red-600 text-sm mt-1">{errors.phone_number}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full p-3 border rounded focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className={`w-full py-3 rounded-lg text-white transition ${
          isFormValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
        }`}
        disabled={!isFormValid}
      >
        Next
      </button>
    </form>
  );
};

export default StudentForm;
