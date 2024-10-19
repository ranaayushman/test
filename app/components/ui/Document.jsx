import DocUpload from "@/app/archive/DocUpload";
import React, { useState } from "react";

const Document = () => {
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
      <h2>Documents Required:</h2>
      <div className="grid grid-cols-4 gap-x-4 mb-4 mt-[20px]">
        <DocUpload label="Birth Certificate:" />
        <DocUpload label="Transfer Certificate:" />
      </div>
      <div className="grid grid-cols-4 gap-x-4 mb-4">
        <DocUpload label="Migration Certificate:" />
        <DocUpload label="Mark Sheet:" />
      </div>
    </form>
  );
};

export default Document;
