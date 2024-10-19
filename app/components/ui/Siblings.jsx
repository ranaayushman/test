import InputField from "@/app/archive/InputField";
import SelectField from "@/app/archive/SelectField";
import React, { useState } from "react";

const Siblings = () => {
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
      <div>
        <h2>Details of siblings (if any) :-</h2>
        <div className="grid grid-cols-5 gap-x-4">
          <InputField label="Name" />
          <InputField label="Relation" />
          <SelectField label="Age" />
          <InputField label="School Studying in" />
        </div>
      </div>
    </form>
  );
};

export default Siblings;
