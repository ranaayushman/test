import InputField from "@/app/archive/InputField";
import SelectField from "@/app/archive/SelectField";
import React, { useState } from "react";

const Finance = () => {
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
      <h2>Financial Resources of Parents/Guardian: </h2>
      <div className="grid grid-cols-4 gap-x-4 mt-[20px]">
        <InputField label="Relation With Guardian:" />
        <InputField label="Monthly Income:" />
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        <InputField label="Relation With Guardian:" />
        <SelectField label="Monthly Income:" />
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        <SelectField label="No. of Earning Members in the Family:" />
      </div>
    </form>
  );
};

export default Finance;
