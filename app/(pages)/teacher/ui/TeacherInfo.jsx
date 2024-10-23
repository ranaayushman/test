import DateField from "@/app/components/ui/fields/DateField";
import InputField from "@/app/components/ui/fields/InputField";
import RadioField from "@/app/components/ui/fields/RadioField";
import FileUploadField from "@/app/components/ui/fields/UploadField";
import React, { useState } from "react";

const TeacherPInfo = () => {
  const [formData, setFormData] = useState({
    TeacherCode: "",
    teacherName: "",
    admissionDate: "",
    session: "",
    fullName: "",
    profilePicture: null,
    gender: "",
    dob: "",
    primaryPhone: "",
    secondaryPhone: "",
    optionalPhone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const minSize = 10 * 1024;
      const maxSize = 40 * 1024;
      const file = files[0];

      if (file.size < minSize || file.size > maxSize) {
        alert("Image size should be between 10KB to 40KB");
        e.target.value = null;
        return;
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["TeacherCode", "fullName", "gender", "dob"];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch("", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form Data Submitted Successfully:", data);
        alert("Form submitted successfully");
        setFormData({
          TeacherCode: "",
          teacherName: "",
          admissionDate: "",
          session: "",
          fullName: "",
          profilePicture: null,
          gender: "",
          dob: "",
          primaryPhone: "",
          secondaryPhone: "",
          optionalPhone: "",
          email: "",
        });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 w-1/2">
      <div className="">
        <div className="">
          <InputField
            placeholder="Enter Teacher's Code:"
            name="TeacherCode"
            value={formData.TeacherCode}
            onChange={handleChange}
            label="Teacher's Code:"
            required
          />
        </div>

        <div className="">
          <InputField
            label="Teacher's Name:"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            required
          />
        </div>

        <FileUploadField
          label="Profile Picture"
          name="profilePicture"
          onChange={handleFileChange}
          accept=".jpg,.jpeg"
          placeholder="Upload a profile picture (10KB-40KB)"
        />

        <div className="flex justify-between gap-x-4">
          <RadioField
            label="Gender:"
            name="gender"
            value={formData.gender}
            options={["Male", "Female", "Transgender"]}
            onChange={handleChange}
            required
          />
          <div className="h-16 border"></div>
          <DateField
            label="Date of Birth:"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="border-0 border-b rounded-none"
          />
        </div>

        <div>
          <h2 className="text-md mt-4">Phone No:</h2>
          <div className="grid grid-cols-3 gap-x-4">
            <InputField
              placeholder="Primary No."
              name="primaryPhone"
              value={formData.primaryPhone}
              onChange={handleChange}
            />
            <InputField
              placeholder="Secondary No."
              name="secondaryPhone"
              value={formData.secondaryPhone}
              onChange={handleChange}
            />
            <InputField
              placeholder="Optional No."
              name="optionalPhone"
              value={formData.optionalPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <h2 className="text-md mt-4">Email:</h2>
          <InputField
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </div>
      </div>
    </form>
  );
};

export default TeacherPInfo;
