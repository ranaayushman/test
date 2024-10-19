import InputField from "@/app/archive/InputField";
import RadioField from "@/app/archive/RadioField";
import React, { useState } from "react";

const Guardians = () => {
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
    <form onSubmit={handleSubmit}>
      <div className="w-1/2">
        <InputField
          label="Father/Guardian’s Name:"
          placeholder="Father/Guardian’s Name"
        />
        <InputField
          label="Father/Guardian’s Residential Address:"
          placeholder="Father/Guardian’s Residential Address"
        />
        <InputField
          label="Father/Guardian’s Occupation:"
          placeholder="Father/Guardian’s Occupation"
        />
        <InputField label="Mother’s Name:" placeholder="Mother’s Name" />
        <InputField
          label="Mother’s Residential Address:"
          placeholder="Enter Mother’s Residential Address"
        />
        <InputField
          label="Mother’s Occupation:"
          placeholder="Mother’s Occupation"
        />
      </div>
      <div className="flex gap-x-5">
        <RadioField label="Only Child:" options={["Yes", "No"]} />
        <div className="border h-16"></div>
        <RadioField
          label="Category:"
          options={["General", "SC", "ST", "OBC", "EWS(Attach Proof)"]}
        />
        <div className="border h-16"></div>
        <RadioField label="Specially Abled:" options={["Yes", "No"]} />
      </div>
    </form>
  );
};

export default Guardians;
