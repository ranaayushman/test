import InputField from "@/app/components/ui/InputField";
import SelectField from "@/app/components/ui/SelectField";
import React, { useState } from "react";

const Subjects = () => {
  const [formData, setFormData] = useState({
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: "",
    subject6: "",
    subject7: "",
    primaryPhone: "",
    secondaryPhone: "",
    optionalPhone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2>Subjects:</h2>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField
          placeholder="Enter Subject 1"
          name="subject1"
          value={formData.subject1}
          onChange={handleChange}
        />
        <SelectField
          placeholder="Enter Subject 2"
          name="subject2"
          value={formData.subject2}
          onChange={handleChange}
        />
        <SelectField
          placeholder="Enter Subject 3"
          name="subject3"
          value={formData.subject3}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField
          placeholder="Enter Subject 4"
          name="subject4"
          value={formData.subject4}
          onChange={handleChange}
        />
        <SelectField
          placeholder="Enter Subject 5"
          name="subject5"
          value={formData.subject5}
          onChange={handleChange}
        />
        <SelectField
          placeholder="Enter Subject 6"
          name="subject6"
          value={formData.subject6}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-5 gap-x-4">
        <SelectField
          placeholder="Enter Subject 7"
          name="subject7"
          value={formData.subject7}
          onChange={handleChange}
        />
      </div>

      <h2>Phone No:</h2>
      <div className="grid grid-cols-5 gap-x-4">
        <InputField
          placeholder="Primary No."
          name="primaryPhone"
          value={formData.primaryPhone}
          onChange={handleChange}
        />
        <InputField
          placeholder="Secondary No."
          name="secondaryPhone"
          value={formData.secondaryPhone}
          onChange={handleChange}
        />
        <InputField
          placeholder="Optional No."
          name="optionalPhone"
          value={formData.optionalPhone}
          onChange={handleChange}
        />
      </div>

      <div className="w-1/2">
        <InputField
          label="Email:"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="w-1/2">
        <InputField
          label="Permanent/Local Address:"
          placeholder="Permanent/Local Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Subjects;
