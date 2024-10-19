import InputField from "@/app/archive/InputField";
import SelectField from "@/app/archive/SelectField";
import React, { useState } from "react";

const Stream = () => {
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
    // You can add logic to send the form data to an API or process it as needed
  };
  return (
    <form onSubmit={handleChange}>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField label="Stream:" />
        <SelectField label="Section:" />
        <SelectField label="Roll No:" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField label="Religion:" />
        <SelectField label="Blood Group:" />
        <InputField label="Mother Tongue:" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField label="Height:" />
        <SelectField label="Weight:" />
        <InputField label="P.O.:" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <InputField label="P.S.:" />
        <InputField label="Pincode:" />
        <InputField label="District:" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <InputField label="Second Language:" />
      </div>
    </form>
  );
};

export default Stream;
