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
   
  };
  return (
    <form onSubmit={handleChange}>
      <div>
        <h2 className="my-[20px]">Details of siblings (if any) :-</h2>
        <div className="grid grid-cols-5 gap-x-4">
          <InputField label="Name" placeholder="Enter Name"/>
          <InputField label="Relation" placeholder="Relation"/>
          <SelectField label="Age" placeholder="Select Age"/>
          <InputField label="School Studying in"  placeholder="School Studying in"/>
        </div>
      </div>
    </form>
  );
};

export default Siblings;
