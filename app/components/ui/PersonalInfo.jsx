import DateField from "@/app/archive/DateField";
import InputField from "@/app/archive/InputField";
import RadioField from "@/app/archive/RadioField";
import SelectField from "@/app/archive/SelectField";
import FileUploadField from "@/app/archive/UploadField";
import React, { useState } from "react";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    selectedOption: "",
    document: null,
    selectedOption2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] }); // handle file upload
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData instance
    const formDataToSend = new FormData();

    // Append form data
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // API call to submit form data
      const response = await fetch("https://example.com/api/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form Data Submitted Successfully:", data);
        alert("Form submitted successfully");
      } else {
        console.error("Error submitting form", response);
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-1/2">
        <InputField
          placeholder="Enter Serial No"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Serial No:"
          className=""
        />
        <DateField
          label="CLASS to which admission sought:"
          className="w-1/4"
          onChange={handleChange}
          placeholder="Admission Date"
        />
        <div className="grid grid-cols-2 w-full gap-x-4">
          <DateField label="Admission Date:" onChange={handleChange} />
          <SelectField
            className=""
            onChange={handleChange}
            label="Session:"
            name="session"
            value={formData.session}
            options={["2023", "2024", "2025"]}
          />
        </div>
        <InputField
          label="Name:"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <FileUploadField
          label="Profile Picture"
          name="profilePicture"
          onChange={handleFileChange}
        />
        <div className="grid grid-cols-2 w-full">
          <RadioField
            label="Gender:"
            name="gender"
            value={formData.gender}
            options={["Male", "Female", "Other"]}
            onChange={handleChange}
          />
          <DateField
            label="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
