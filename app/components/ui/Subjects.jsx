import InputField from "@/app/archive/InputField";
import SelectField from "@/app/archive/SelectField";
import React, { useState } from "react";

const Subjects = () => {
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <form onSubmit={handleChange}>
      <h2>Subjects:</h2>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField placeholder="Enter Subject 1" />
        <SelectField placeholder="Enter Subject 2" />
        <SelectField placeholder="Enter Subject 3" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField placeholder="Enter Subject 4" />
        <SelectField placeholder="Enter Subject 5" />
        <SelectField placeholder="Enter Subject 6" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField placeholder="Enter Subject 7" />
      </div>
      <h2>Phone No:</h2>
      <div className="grid grid-cols-5 gap-x-4">
        <InputField placeholder="Primary No." />
        <InputField placeholder="Secondary No." />
        <InputField placeholder="Optional No." />
      </div>
      <div className="w-1/2">
        <InputField label="Email:" placeholder="Email" />
      </div>
      <div className="w-1/2">
        <InputField
          label="Permanent/Local Address:"
          placeholder="Permanent/Local Address"
        />
      </div>
    </form>
  );
};

export default Subjects;
