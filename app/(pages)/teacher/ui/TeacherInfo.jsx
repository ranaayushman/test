import DateField from "@/app/components/ui/fields/DateField";
import InputField from "@/app/components/ui/fields/InputField";
import RadioField from "@/app/components/ui/fields/RadioField";
import SelectField from "@/app/components/ui/fields/SelectField";
import FileUploadField from "@/app/components/ui/fields/UploadField";
import React, { useState } from "react";

const TeacherPInfo = () => {
  const [formData, setFormData] = useState({
    TeacherCode: "",
    class: "",
    admissionDate: "",
    session: "",
    fullName: "",
    profilePicture: null,
    gender: "",
    dob: "",
  });

  const classOptions = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
  ];

  const sessionOptions = ["2023", "2024", "2025"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      setFormData({ ...formData, [name]: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    const requiredFields = [
      "serialNo",
      "class",
      "admissionDate",
      "session",
      "fullName",
      "gender",
      "dob",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
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
          serialNo: "",
          class: "",
          admissionDate: "",
          session: "",
          fullName: "",
          profilePicture: null,
          gender: "",
          dob: "",
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
            placeholder="Enter Teacher’s Code:"
            name="serialNo"
            value={formData.TeacherCode}
            onChange={handleChange}
            label="Teacher’s Code:"
            required
          />
        </div>

        <div className="">
          <InputField
            label="Teacher’s Name:"
            name="class"
            value={formData.class}
            onChange={handleChange}
            options={classOptions}
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
            <InputField placeholder="Primary No." />
            <InputField placeholder="Secondary No." />
            <InputField placeholder="Optional No." />
          </div>
        </div>
        <div>
          <h2 className="text-md mt-4">Email:</h2>
          <InputField placeholder="Email" />
        </div>
      </div>
    </form>
  );
};

export default TeacherPInfo;
