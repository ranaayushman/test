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
   
  };
  return (
    <form onSubmit={handleChange}>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField label="Stream:" placeholder="Select Stream" />
        <SelectField label="Section:" placeholder="Select Section" />
        <SelectField label="Roll No:" placeholder="Enter Roll No" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField label="Religion:" placeholder="Select Religion" />
        <SelectField label="Blood Group:" placeholder="Select Blood Group" />
        <InputField label="Mother Tongue:" placeholder="Enter Mother Tongue" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField label="Height:" placeholder="Select Height" />
        <SelectField label="Weight:" placeholder="Select Weight" />
        <InputField label="P.O.:" placeholder="Enter P.O." />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <InputField label="P.S.:" placeholder="Enter P.S." />
        <InputField label="Pincode:" placeholder="Enter Pincode" />
        <InputField label="District:" placeholder="Enter District" />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <InputField
          label="Second Language:"
          placeholder="Enter Second Language"
        />
      </div>
    </form>
  );
};

export default Stream;
