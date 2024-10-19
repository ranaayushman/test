import DateField from "@/app/archive/DateField";
import InputField from "@/app/archive/InputField";
import RadioField from "@/app/archive/RadioField";
import SelectField from "@/app/archive/SelectField";
import React, { useState } from "react";

const School = () => {
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
      <div className="w-1/2">
        <div className="w-1/2">
          <SelectField label="Last Class Attended:" options={["2024"]} />
        </div>
        <RadioField
          label="Last School affiliated is:"
          options={[
            "CBSE",
            "ICSE",
            "IB",
            "State Board",
            "Other(please specify)",
          ]}
        />
      </div>
      <div>
        <h2>Result of last Class:</h2>
        <div className="grid grid-cols-6 gap-x-4">
          <SelectField label="Subject" />
          <SelectField label="Maximum Marks" />
          <SelectField label="Marks Obtained" />
          <SelectField label="% of Marks" />
          <SelectField label="Remarks" />
        </div>
      </div>
      <div>
        <h3>Transfer Certificate Details*:</h3>
        <div className="grid grid-cols-4 gap-x-4">
          <InputField label="Transfer Certificate No:" />
          <DateField label="Date of Issue" />
        </div>
      </div>
    </form>
  );
};

export default School;
